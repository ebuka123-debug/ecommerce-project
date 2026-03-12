export function productExistInCart(token,data) {

    for (item of data) {
        if (item.id === token) {
            return true;
        }
    }
}

