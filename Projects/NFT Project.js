//Create a variable to hold your NFT's
const NFTs = [];

//This function will take in the values of metadata as parameter
function mintNFT(uid, name, course, cgpa){
    // Create an object inside your mintNFT function that will hold the metadata for your NFTs.
    const NFT={
        uid: uid,
        name: name,
        course: course,
        cgpa: cgpa
    };

    //Adding my NFT in the main NFT variable
    NFTs.push(NFT);
}

//This function will print all the NFTs metadata to the console
function listNFTs(){
    let i=0;
    //Create a loop that will go through an array of NFT
    while(i < NFTs.length){
        const NFT = NFTs[i];
        console.log("\nNFT " + (i+1) + ":-")
        console.log("  UID: " + NFTs[i].uid);
        console.log("  Name: " + NFTs[i].name);
        console.log("  Course: " + NFTs[i].course);
        console.log("  CGPA: " + NFTs[i].cgpa);
        i++;
    }
}

//This function will return the number of NFTs created
function getTotalSupply(){
    return NFTs.length;
}

//Call your function

//Mint some NFTs
mintNFT(11543, "Aditya", "BE-CSE", 8.19);
mintNFT(12482, "Divyanshi", "BSC", 9.9);
mintNFT(13918, "Arneet", "BCA", 9.1);

//List all NFTs
listNFTs();

//Print the total number of NFTs
console.log("\nNumber of NFTs are: "+ getTotalSupply());