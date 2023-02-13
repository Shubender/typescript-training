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
            result.push(artists[i]);
            result.push(...getAlbumsByArtistName(name));
            break;
        }
    }
    return result;
}

// console.group("getArtistAndAlbumsByArtistName:");
// console.log(getArtistAndAlbumsByArtistName("Madonna"));
// console.groupEnd();

// Task 4
/*
    Write a getArtistWithAlbumNames function that expects to receive an array that contains a single object of the Artist type 
    and any number of objects of the Album type (the idea is that the caller would obtain this array by calling 
    the getArtistAndAlbumsByArtistName function). The getArtistWithAlbumNames function should return an object of 
    a new type that has all the same properties as objects of the Artist type but with the addition of an albumNames property, 
    whose value is an array of strings. The strings in the albumNames array should be extracted from the objects of 
    the Album type in the array that was passed to getArtistWithAlbumNames.
*/

function getArtistWithAlbumNames(
    data: Array<Album | Artist>
): Artist & { albumNames: string[]; category: "artist" | "album" } {
    const artist = data.filter((item) => item.category === "artist")[0];
    const albumNames = data
        .filter((item) => item.category === "album")
        .map((album) => album.name);

    return {
        ...artist,
        albumNames,
        category: "artist",
    };
}

console.group('getArtistWithAlbumNames:');
console.log(getArtistWithAlbumNames(getArtistAndAlbumsByArtistName('Madonna')));
console.groupEnd();