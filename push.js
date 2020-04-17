const push = require('web-push');
// const vapidkeys = push.generateVAPIDKeys();
// console.log(vapidkeys);

const vapidkeys = { publicKey:
    'BNWL64yXdofZXKTHQ9Vavhc_ZLfAwKfHlGcWYT7WwUMi2IeDLr2F-T4rwRMGKdr4RSzzy89oTQlcqrc0R0WJVyk',
   privateKey: 'RiMoKxFhy_GWwSwfTnc1Yi_s7ErLgLOpnTEHncsUH0s' };

push.setVapidDetails('mailto:test@code.co..uk', vapidkeys.publicKey, vapidkeys.privateKey);



push.sendNotification(sub, 'text message');