const messages = {
    1: "Quand je suis avec toi, les heures passent comme des minutes ! Chaque seconde passé a te parler me rempli de joie ! xx ",
    2: "Tu es le rayon de soleil qui illumine mes journées meme quand elles vont moins bien ! Je ne veux jamais te perdre ! xx",
    3: "Il y a 8 milliard d'etre humain sur terre et tu es celle avec les plus beaux yeux du monde entier ! xx",
    4: "Je me lève, je pense à toi. Je me couche, je pense à toi. Je pense constamment à toi ! xx",
    5: "Tu es la plus belle rencontre que j'ai fait cette année. Je te veux pour toujours ! xx",
    6: "À chaque fois que j'ai une notification, j'espère que c'est la tienne, car c'est toi qui me rend heureux ! xx",
    7: "À chaque fois que je t'écrit, j'ai le sourire. Tu me rends tellement heureux c'est fou ! Tu es incroyable ! xx",
    8: "Tu es tout ce dont je reve. Tu as les plus beaux yeux du monde, et ton sourire me fait craquer à chaque fois ! xx",
    9: "À chaque fois que je reviens de l'école je suis content, car je sais que je vais t'appeler et ca c'est le plus beau moment de ma journée ! xx",
    10: "Je suis fier de la personne dont tu deviens. Tu es ma source d'inspiration, mon idole et la personne dont je souhaite ressembler plus tard ! Je suis si fier de toi ! xx",
    11: "Je n'ai qu'une seule envie, un seul désir, une seule idée, un seul reve, t'avoir près de moi constamment ! xx",
    12: "Mon coeur t'aime trop, je vais toujours te vouloir. Je t'aime et je t'aimerais jusqu'au dernier jour de ma vie ! xx",
    13: "Je t'aime plus que les mots ne peuvent le décrire. Si je t'ai, alors j'ai tout ce donc j'ai toujours rever ! xx",
    14: "Si un jour tu veux savoir à quel point je taime, regarde le ciel et compte les étoiles ! xx",
    15: "Tu es le plus beau cadeau que la vie ma offert ! Je suis si heureux de t'avoir. Je pense constamment à toi ! xx",
    16: "Chaque histoire d'amour est belle à sa façon mais la notre est ma préférée ! Je t'aime xx",
    17: "Je ne peux pas lire l'avenir mais tout ce que je sais déja c'est que je veux etre avec toi ! xx",
    18: "Tu seras à jamais le battement le plus fort de mon coeur.  Je t'aime ! xx",
    19: "Je ne sais pas ou je m'en vais dans la vie, mais je sais que tout va mieux quand je t'ai près de moi. Je t'aime ! xx",
    20: "Quand on aime on ne compte pas. Pourtant, je compte chaque jour à t'attendre avant de pouvoir etre heureux avec toi ! Je t'aime ! xx",
    21: "Tu es la lumière dans ma vie qui me guide dans les moments plus sombres. Je suis si reconnaissant de t'avoir dans ma vie xx",
    22: "Tu es le plus beau cadeau que la vie m'a offert. Je t'aime plus que les mots ne peuvent le décrire xx ",
    23: "Tu es bien plus qu'une simple personne, tu es une partie de moi, mon coeur n'est qu'a toi et mes yeux ne voit que toi xx",
    24: "Je t'aime aujourd'hui, je t'aime demain. Je t'aime jusqu'à la fin xx",
    25: "Tu n'imagines pas le sourire que j'ai juste en pensant à toi ! Merci de me rendre aussi heureux et de prendre soin de moi ! Je t'aime xx",
    26: "Je reve d'etre dans tes bras, de sentir ton odeur et regarder tes magnifiques yeux et ton beau sourire ! C'est tout ce dont je veux au monde ! xx",
    27: "Je ne m'attendais pas a te rencontrer et malgré ca tu es la plus belle rencontre que j'ai fait cette année ! xx",
    28: "Tu es ma première pensée le matin, et la dernière le soir. Chaque jour je t'aime un peu plus xx",
    29: "J'ai découvert ce qu'était le vrai amour en te rencontrant ! Je t'aime tellement xx",
    30: "Tu seras à jamais le battement le plus fort de mon coeur ! xx Tu me manques énormément "
};

const days = document.querySelectorAll('.day');
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message');
const closeBtn = document.getElementById('close-btn');

days.forEach(day => {
    day.addEventListener('click', () => {
        const dayNumber = day.getAttribute('data-day');
        messageText.textContent = messages[dayNumber] || "Pas de message pour ce jour !";
        messageBox.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    messageBox.style.display = 'none';
});