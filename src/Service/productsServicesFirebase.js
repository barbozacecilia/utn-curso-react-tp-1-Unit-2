import firebase from "../Config/firebase";

/*with firebase*/
export async function getNewProduct() {
    const querySnapshot = await firebase.db.collection("products")
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
