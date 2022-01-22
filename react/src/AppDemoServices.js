const getwelcome = () => { return "Welcome to "; }

const urlfetch = async (url) => { return await (await fetch(url)).json(); }

export const adddemoservices = {
    getwelcome,
    urlfetch
}
