import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg" />
            </div>
            <h1>Home</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src ="https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901533-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTMwMTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2g1OC85NDA3NzMxMTcxMzU4LmpwZ3w5NjBiYTIzZWE1Yjg5NjQzN2YyZTAxZjNhNGI2ODg0YzQ4NmZlMDZiN2EwYmVkYjlhZjA3OGIxNDZiNDEzNTc0"/>
                </div>
                <div className="text-wrapper item">
                    <span>Price : $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home