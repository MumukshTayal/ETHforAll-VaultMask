/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsdoc/require-jsdoc */
import * as PushAPI from '@pushprotocol/restapi';
// import { useState } from 'react';
import { fetchUrl } from './insights';
import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { ManageStateOperation } from '@metamask/rpc-methods/dist/restricted/manageState';
import { DialogType } from '@metamask/rpc-methods/dist/restricted/dialog';
import { panel, text, heading } from '@metamask/snaps-ui';

/**
 * Get a message from the origin. For demonstration purposes only.
 *
 * @param originString - The origin string.
 * @returns A message based on the origin.
 */
export const getMessage = (originString: string): string =>
  `Hello, ${originString}!`;

// const [notifMsg, setNotifMsg] = useState('');

async function fetchNotifications(addr: string): Promise<string> {
  console.log(addr);
  // const fetchedNotifications = await PushAPI.user.getFeeds({
  //   user: `eip155:5:${addr}`,
  //   env: 'staging',
  // });

  const feedsUrl = `https://backend-staging.epns.io/apis/v1/users/eip155:5:${addr}/feeds`;
  const fetchedNotifications: any = await fetchUrl(feedsUrl);

  let msg;
  // Parse the notification fetched
  console.log('This is the fetchedNotification: \n', fetchedNotifications);
  if (fetchedNotifications) {
    msg = `You have ${fetchedNotifications.itemcount} notifications \n`;
    console.log(msg);
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < fetchedNotifications.itemcount; i++) {
      msg += `Channel Name: ${fetchedNotifications.feeds[i].payload.data.app} and notif message: ${fetchedNotifications.feeds[i].payload.notification.body}\n`;
      console.log(msg);
    }
    console.log('Hello, this is for testing purposes');
    console.log(msg);
  } else {
    msg = 'You have 0 notifications';
  }
  // setNotifMsg(msg);
  return msg;
}

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns `null` if the request succeeded.
 * @throws If the request method is not valid for this snap.
 * @throws If the `snap_confirm` call failed.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  // const addr = wallet.selectedAddress;

  switch (request.method) {
    case 'hello':
      return snap.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: getMessage(origin),
            description:
              'This custom confirmation is just for display purposes.',
            textAreaContent:
              'This is a custom message confirmation for the demonstration purposes.',
          },
        ],
      });
    case 'upload':
      return snap.request({
        // method: 'snap_dialog',
        // params: {
        //   type: DialogType.Confirmation,
        //   content: panel([
        //     heading('File Upload'),
        //     text('The file is successfully Uploaded'),
        //   ]),
        // },
        method: 'snap_confirm',
        params: [
          {
            prompt: getMessage(origin),
            description: 'File Upload',
            textAreaContent: 'The file is successfully Uploaded',
          },
        ],
      });
    case 'upload_file':
      const params = request.params as { filename: string; cid: string };

      return snap.request({
        method: 'snap_manageState',
        params: {
          operation: ManageStateOperation.UpdateState,
          newState: { filename: params.filename, cid: params.cid },
        },
      });

    // case 'iterate_files':
    //   const param = request.params as { filename: string; cid: string };
    //   if (notifMsg.length > 10) {
    //     for (let i = 0; i < parseInt(notifMsg[9], 10); i++) {
    //       const searchStr = 'cid: ';
    //       const len = 59;
    //       const str = notifMsg;
    //       let index = str.indexOf(searchStr);

    //       while (index !== -1) {
    //         const start = index + searchStr.length;
    //         const end = start + len;
    //         const subStr = str.substring(start, end);
    //         param.cid.push(subStr);
    //         index = str.indexOf(searchStr, index + 1);
    //       }
    //     }
    //   }
    //   return snap.request({
    //     method: 'snap_manageState',
    //     params: {
    //       operation: ManageStateOperation.UpdateState,
    //       newState: { filename: '', cid: param.cid },
    //     },
    //   });

    case 'get_file':
      return snap.request({
        method: 'snap_manageState',
        params: {
          operation: ManageStateOperation.GetState,
        },
      });

    case 'push_notifications': {
      const msg = await fetchNotifications(
        '0x9B21e0f54e3A66f55291b6E64370089C288eC5B9',
      );
      return snap.request({
        // method: 'snap_dialog',
        // params: {
        //   type: DialogType.Confirmation,
        //   content: panel([
        //     heading('Notifications Inbox'),
        //     text(msg),
        //   ]),
        // },
        method: 'snap_confirm',
        params: [
          {
            prompt: getMessage(origin),
            description: 'Notifications Inbox',
            textAreaContent: msg,
          },
        ],
      });
    }

    default:
      throw new Error('Method not found.');
  }
};
