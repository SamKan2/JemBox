//Shopping Cart
const buyNow = document.querySelector('.buy')
const previewContainer = document.querySelector('.products-preview')
const previewBox = previewContainer.querySelectorAll('.preview')

document.querySelectorAll('.product-container .product').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex'
        let name = product.getAttribute('data-name')
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target')
            if (name == target) {
                preview.classList.add('active')
            }
        })
    }
})

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active')
        previewContainer.style.display = 'none'
    }
})

buyNow.addEventListener('click', () => {
    console.log('Buy');
})