// My code is on the bottom

interface Artist {
    name: string;
    category: "artist";
}

interface Album {
    name: string;
    artistName: string;
    category: "album";
}

const artists: Artist[] = [
    {
        name: "Madonna",
        category: "artist",
    },
    {
        name: "Led Zeppelin",
        category: "artist",
    },
    {
        name: "Earth, Wind, and Fire",
        category: "artist",
    },
];

let albums: Album[] = [
    {
        name: "Like a Virgin",
        artistName: "Madonna",
        category: "album",
    },
    {
        name: "Like a Prayer",
        artistName: "Madonna",
        category: "album",
    },
    {
        name: "Houses of the Holy",
        artistName: "Led Zeppelin",
        category: "album",
    },
    {
        name: "In Through the Out Door",
        artistName: "Led Zeppelin",
        category: "album",
    },
];

// Task 1
// Write an extractName function that expects to be passed an object that has a name property
// and returns the value of that name property.

function extractName(person: { name: string }): string {
    return person.name;
}

// console.group('extractName:');
// console.log(extractName(artists[0]));
// console.log(extractName(albums[0]));
// console.groupEnd();

// Task 2
// Write a getAlbumsByArtistName function that expects to receive a string as an argument and returns
// an array of objects of the Album type whose artistName property matches the argument.

function getAlbumsByArtistName(name: string): Array<Album> {
    let result: Array<Album> = [];
    // console.log('name: ', name);
    for (let i = 0; i < albums.length; i++) {
        // console.log("albums: ", albums[i]);
        if (name === albums[i].artistName) {
            // console.log("albums[i].name: ", albums[i].artistName);
            result.push(albums[i]);
        }
    }
    return result;
}

// console.group('getAlbumsByArtistName:');
// console.log(getAlbumsByArtistName('Led Zeppelin'));
// console.groupEnd();

// Task 3
/*
Write a getArtistAndAlbumsByArtistName function that expects to receive a string as an argument and returns an array. 
The array it returns should contain:
    The one object of the Artist type whose name property matches the argument
    All of the objects of Album type whose artistName property matches the argument
To find the objects of the Album type, use the getAlbumsByArtistName function that you wrote.
*/

function getArtistAndAlbumsByArtistName(name: string): Array<Album | Artist> {
    let result: Array<Album | Artist> = [];
    for (let i = 0; i < artists.length; i++) {
        if (name === artists[i].name) {
            // console.log("albums[i].name: ", albums[i].artistName);
            result.push(artists[i]);
            result.push(...getAlbumsByArtistName(name));
            break;
        }
    }
    return result;
}

console.group("getArtistAndAlbumsByArtistName:");
console.log(getArtistAndAlbumsByArtistName("Madonna"));
console.groupEnd();
