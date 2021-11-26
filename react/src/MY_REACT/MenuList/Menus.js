export const Menus = {
    MenuList
}

function MenuList(){
    
    const menuarr = [
        { to: "hellomessage", name: "Hello Message", prps: 'Daemons' },
        { to: "cardtype", name: "Card"},
        { to: "qrcode", name: "QR Code"},
        { to: "linechart", name: "MLine Chart"},
        { to: "carddetails", name: "Card Details"},
        { to: "slider", name: "RangeSlider"},
        { to: "circular", name: "Circular"},
        { to: "textinput", name: "TextInput"},
        { to: "buttons", name: "Buttons"},
        { to: "otpinputfield", name: "OtpInputField"},
        { to: "selectdrop", name: "SelectOptions"},
        { to: "checkbx", name: "CheckBox"},
        { to: "reactrender", name: "Render of React Elements"},
        // { to: "pwahome", name: "Pwa Home"},
    ];

    return menuarr;
}
