import React from "react";

export default () => {
    return (
        <section className="ion-padding">
            <h1>Explanation</h1>
            <p>Using the same password for multiple email, shopping and social networking websites is risky, it means that a <a href="https://privacyrights.org/data-breaches">security breach</a> at  one website will compromise all your accounts, possibly even leading to <a href="https://en.wikipedia.org/wiki/Identity_theft">identity theft</a>.</p>
            <p>So,  the idea is that you memorise just one, reasonably long, <a href="https://passwordsecurity.info/">secure</a> master password and use that to  generate a set of  non-dictionary passwords. Copy and paste the new password(s) into the website and set your web browser to remember them.</p>
            <p>All the websites get different passwords, but you only have to remember one!</p>
            <p>Using a different PC? you can re-generate the same set of passwords at any time by returning to this page and entering the same master password. </p>
            <ul>
                <li>For any website that's not on the list, just type the name into the 'Custom' box (the last one in the list) and press Generate. </li>
                <li>This is the 20 character version, see also the <a href="https://ss64.com/pass/pass.html">10 char.</a> and <a href="https://ss64.com/pass/pass15.html">15 character</a> versions.</li>
                <li>Not all websites will accept 20 character passwords yet, but support is improving all the time.</li>
                <li>Using UPPER or lower case will produce different passwords, when using this for the first time it’s a good idea to use the 'Show Password' tickbox to check for any typos.</li>
                <li>Most websites  will send a password reset via email, so set the password for that email account to something completely different, just in case you ever forget the master password!</li>

                <li>To navigate this page using the keyboard, use the TAB and RETURN keys.</li>
            </ul>
            <p>This password generator works using Javascript, entirely within the page, no data is ever passed back to my server. Notwithstanding this, it is a very good idea to save your own copy of this page. <a href="https://ss64.com/pass/passwords.zip">Zip file here</a>. Keeping your own copy ensures that the password generator will still be available to you even if this website goes off-line. You can also <i>View-Source</i> and see exactly how the javascript works, copy it to a USB stick, email it to yourself, even upload it to your own website (it’s open source.) There are no dependent files, just save as a single HTML file.</p>
         
            <a href="https://ss64.com/pass/command-line.html">Command-line version</a>
            <a href="https://ss64.com/docs/security.html">Password security - a comparison of Password Generators</a>
            <p><a href="https://security.stackexchange.com/questions/44368/are-the-ss64-com-password-generators-a-good-approach">Are the SS64.com password generators a good approach?</a> - StackExchange</p>
            <p className="quote">“Password managers don't have to be perfect, they just have to be better than not having one” ~ <a href="https://sudo.pagerduty.com/for_everyone/">Troy Hunt.</a></p>
            <p>Credits</p>
            <p className="tagline">JavaScript implementation of the Secure <a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">Hash Algorithm</a>, (SHA-256, ©Paul Johnston, distributed under the <a href="https://en.wikipedia.org/wiki/BSD_License">BSD License</a>.) Inspired by <a href="http://angel.net/~nic/passwd.sha1.1a.html">Nic Wolff’s password generator</a> Mobile version by <a href="http://jayvanhutten.com/pass/">Jay van hutten</a> </p>
            <p className="tagline"><a href="https://ss64.com/">Simon Sheppard</a>, May 2020</p>
            <p className="tagline">SS64.com/pass/ </p>
        </section>
    );
}