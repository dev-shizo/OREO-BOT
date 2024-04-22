const {
    proto,
    generateWAMessage,
    areJidsSameUser
} = (await import('@shizoweb/baileys')).default

//import store from '../../lib/store.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {

let templategenerate= await generateWAMessageFromContent(from, proto.Message.fromObject({pinInChatMessage: {
key: message.key,
type: 1,
senderTimestampMs: new Date().getTime() / 1000
}}), {})

let templatenew = {
messageContextInfo: { messageAddOnDurationInSecs: 604800 },
...templategenerate.message
}

await conn.relayMessage(from, templatenew, { messageId: templategenerate.key.id })

};
handler.command = /^(pompom)$/i;

export default handler;
