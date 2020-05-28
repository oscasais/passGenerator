export interface Site {
    seed: string,
    url: string,
    displayName: string
}

export enum hashMode {
    char10,
    char15,
    char20
}

export const sites: Array<Site> = [
    { seed: "amazon", url: "https://www.amazon.com/", displayName: "Amazon" },
    { seed: "apple", url: "https://www.apple.com/", displayName: "Apple" },
    { seed: "box", url: "https://app.box.com/login/", displayName: "Box" },
    { seed: "ebay", url: "https://signin.ebay.com/", displayName: "Ebay" },
    { seed: "facebook", url: "https://www.facebook.com/", displayName: "Facebook" },
    { seed: "google", url: "https://www.google.com/", displayName: "Google" },
    { seed: "linkedin", url: "https://www.linkedin.com/", displayName: "LinkedIn" },
    { seed: "nytimes", url: "https://myaccount.nytimes.com/", displayName: "NYTimes" },
    { seed: "outlook", url: "https://www.outlook.com/", displayName: "Outlook" },
    { seed: "paypal", url: "https://www.paypal.com/", displayName: "PayPal" },
    { seed: "tumblr", url: "https://www.tumblr.com/", displayName: "Tumblr" },
    { seed: "twitter", url: "https://twitter.com/", displayName: "Twitter" },
    { seed: "wikipedia", url: "https://www.wikipedia.org/", displayName: "Wikipedia" },
    { seed: "wordpress", url: "https://www.wordpress.com/", displayName: "WordPress" },
    { seed: "yahoo", url: "https://login.yahoo.com/", displayName: "Yahoo" }
]

export default {
    sites,
    hashMode
}