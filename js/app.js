let twitter = { tweets: [
    {
        tweet: `I was at the library, when people began throwing Stephen King novels around. I could not figure out why. Then IT hit me.`,
        userName: `@mariana057`,
        createdAt: `11-04-2022`,
        userAge: 30,
    },
    {
        tweet: `Larry David will replace Henry Cavill as Geralt in ‘THE WITCHER’ Season 4. [meme here]`,
        userName: `@DisbussingFilm`,
        createdAt: `10-29-2022`,
        userAge: 40,
    },
    {
        tweet: `What's your favourite horror movie of 2022 so far?`,
        userName:  `@UniHorror`,
        createdAt: `11-06-2022`,
        userAge: 17,
    },
    {
        tweet: `M-O-O-N that spells I'm done reading The Stand! #stephenking #lawsyes`,
        userName: `@cloudpunch`,
        createdAt: `07-15-2022`,
        userAge: 16,
    },
    {
        tweet: `Ghost Adventures-n-chill`,
        userName: `@Zak_Bagans`,
        createdAt: `09-09-2022`,
        userAge: 45,
    },
    {
        tweet: `2022 Horror VHS Stack <3 [picturebelow]`,
        userName: `@ShawnMansfield`,
        createdAt: `08-22-2022`,
        userAge: 20,
    },
    {
        tweet: `This was done by an AI bot. I asked my tech friend, Jake, to put Pennywise on a bike and this came out. [picturebelow]`,
        userName: `@StephenKing`,
        createdAt: `08-20-2022`,
        userAge: 75,
    },
    {
        tweet: `Epic episode poster set by @billythebutcher #strangerthings [picturebelow]`,
        userName: `@kylelambert`,
        createdAt: `07-04-2022`,
        userAge: 31,
    },
    {
        tweet: `Danny Elfman performs "This is Halloween" from "The Nightmare Before Christmas" at #Coachella [videobelow]`,
        userName: `@Variety`,
        createdAt: `04-16-2022`,
        userAge: 39,
    },
    {
        tweet: `No Mercy Percy!! I just finished #TheLegendofVoxMachina after knowing nothing about c1 and I just loved it. Had a blast painting this one! #CriticalRoleArt [picturebelow]`,
        userName: `@sabiralangevin`,
        createdAt: `02-20-2022`,
        userAge: 16,
    }
]
};

// while loop to sort users that are >= 18 yr old
let counter = 0;
while (counter < twitter[`tweets`].length){
    if (twitter[`tweets`][counter][`userAge`] >= 18){
        console.log(twitter[`tweets`][counter][`tweet`]);
        console.log(twitter[`tweets`][counter][`userName`]);
        console.log(twitter[`tweets`][counter][`createdAt`]);
    }
    counter = counter +1;
}

// for loop to sort users that are <= 17 yr old
for (let counter = 0; counter < twitter[`tweets`].length; counter = counter +1){
    if (twitter[`tweets`][counter][`userAge`] <= 17){
        console.log(twitter[`tweets`][counter][`tweet`]);
        console.log(twitter[`tweets`][counter][`userName`]);
        console.log(twitter[`tweets`][counter][`createdAt`]);
    }
}
