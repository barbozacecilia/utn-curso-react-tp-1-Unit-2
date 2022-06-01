import firebase from "../Config/firebase";

/*with firebase*/
export async function getNewProduct(search) {
    const querySnapshot = await firebase.db.collection("products").orderBy('name').startAt(search).endAt(search+'\uf8ff')
        .get()
    return querySnapshot.docs
}

export async function getDetailsNewProduct(id) {
    return await firebase.firestore().doc('products/' + id).get()
}

//export async function getDetailsNewProduct(id) {
//   return await firebase.firestore().doc('products/' + id).get().where("name","==",)
//}

export async function updateNewProduct(id,data) {
    return await firebase.firestore().doc('products/' + id).set(data)
}

