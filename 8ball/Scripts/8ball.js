﻿function getPhrase() {
    var phrases = ['Maybe', 'Absolutely', 'Not A Chance', 'Outlook Good', 'Try Again', 'It Is Certain', 'No!', 'Yes!', 'Very doubtful'];

    var num = Math.floor(Math.random() * phrases.length);
    document.getElementById("fortune").innerHTML = phrases[num];    
}

