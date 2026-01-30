// Variables globales
let carrito = [];
let carritoAbierto = false;
const numeroWhatsApp = "+584127050149";
let todosProductos = [];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar
    inicializarAñoActual();
    cargarProductosDesdeLista();
    inicializarEventListeners();
    mostrarBannerCookies();
    
    // Ocultar loading screen después de 2 segundos
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 2000);
});

// Inicializar el año actual en el footer
function inicializarAñoActual() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Cargar productos desde la lista proporcionada
function cargarProductosDesdeLista() {
    // Lista de productos proporcionada
    const listaProductos = [
        // CABALLEROS (primeros 20 como ejemplo)
        { nombre: "JEANNE ARTHES COLONIAL CLUB SIGNATURE EDT 100ML CABALLERO", categoria: "caballeros", precio: 45.99 },
        { nombre: "JEANNE ARTHES BOUM URBAN EDP 100ML CABALLERO", categoria: "caballeros", precio: 49.99 },
        { nombre: "LATTAFA QIMMAH FOR MEN EDP 100ML CABALLERO", categoria: "caballeros", precio: 42.50 },
        { nombre: "MAISON ALHAMBRA SO SCANDID EDP 100ML CABALLERO", categoria: "caballeros", precio: 38.75 },
        { nombre: "DIOR SAUVAGE EDP 200ML CABALLERO", categoria: "caballeros", precio: 120.00 },
        { nombre: "ARMANI EMPORIO STRONGER WITH YOU EDT 100ML CABALLERO", categoria: "caballeros", precio: 85.99 },
        { nombre: "ADIDAS CHAMPIONS LEAGUE ARENA EDIT EDT 100ML CABALLERO", categoria: "caballeros", precio: 25.50 },
        { nombre: "ADIDAS VICTORY LEAGUE EDT 100ML CABALLERO", categoria: "caballeros", precio: 24.99 },
        { nombre: "ADIDAS ICE DIVE EDT 100ML CABALLERO", categoria: "caballeros", precio: 23.75 },
        { nombre: "ARMAF CLUB DE NUIT BLING EDP 75ML CABALLERO", categoria: "caballeros", precio: 35.99 },
        
        // MUJER (primeros 10 como ejemplo)
        { nombre: "DKNY BE DELICIOUS EDP 100ML DAMA", categoria: "mujer", precio: 55.99 },
        { nombre: "MONT BLANC EMBLEM EDP 75ML DAMA", categoria: "mujer", precio: 65.50 },
        { nombre: "PERRY ELLIS 360 RED EDP 100ML DAMA", categoria: "mujer", precio: 42.99 },
        { nombre: "UDV CIEL EDP 100ML", categoria: "mujer", precio: 38.75 },
        { nombre: "PACO RABANNE OLYMPEA EDP 75ML", categoria: "mujer", precio: 75.50 },
        { nombre: "CAROLINA HERRERA GOOD GIRL EDP 80ML DAMA", categoria: "mujer", precio: 89.99 },
        { nombre: "BENETTON UNITED COLORS SISTERLAND RED ROSE EDT 80ML DAMA", categoria: "mujer", precio: 32.50 },
        { nombre: "ARIANA GRANDE ARI EDP 100ML DAMA", categoria: "mujer", precio: 45.99 },
        { nombre: "ARIANA GRANDE SWEET LIKE CANDY EDP 100ML DAMA", categoria: "mujer", precio: 44.50 },
        { nombre: "ABERCROMBIE & FITCH AUTHENTIC NIGHT EDP 100ML LADY", categoria: "mujer", precio: 52.99 },
        
        // UNISEX (primeros 10 como ejemplo)
        { nombre: "LATTAFA KHAMRAH QAHWA EDP 100ML UNISEX", categoria: "unisex", precio: 48.99 },
        { nombre: "LATTAFA BADEE AL OUD HONOR GLORY EDP 100ML", categoria: "unisex", precio: 52.50 },
        { nombre: "AL HARAMAIN AMBER OUD GOLD EDIT 120ML", categoria: "unisex", precio: 68.75 },
        { nombre: "ARMAF CLUB DE NUIT SILLAGE 105ML MEN", categoria: "unisex", precio: 42.99 },
        { nombre: "ARMAF CLUB DE NUIT MILESTONE EDP 105ML UNISEX", categoria: "unisex", precio: 44.50 },
        { nombre: "MACARENA BOULEVARD ROUGE EXTRAIT EDP 100ML", categoria: "unisex", precio: 39.99 },
        { nombre: "LATTAFA QAED AL FURSAN UNLIMITED EDP 100ML", categoria: "unisex", precio: 46.75 },
        { nombre: "AFNAN 9PM REBEL EDP 100ML CABALLERO", categoria: "unisex", precio: 43.50 },
        { nombre: "EMPER STALLION 53 EDP 100ML UNISEX", categoria: "unisex", precio: 47.99 },
        { nombre: "AL HARAMAIN AMBER OUD AQUA DUBAI EXTRAIT DE PARFUM 100ML UNISEX", categoria: "unisex", precio: 72.50 },
        
        // DECANTS
        { nombre: "LATTAFA DECANT 2 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 8.99 },
        { nombre: "ARMAF DECANT 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 9.50 },
        { nombre: "PERRY ELLIS DECANT 2 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 7.99 },
        { nombre: "LATTAFA DECANT 1 Dama y Caballero", categoria: "decants", precio: 8.25 },
        { nombre: "CACHAREL DECANT 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 9.75 },
        { nombre: "AFNAN DECANT Dama y Caballero", categoria: "decants", precio: 8.50 },
        { nombre: "XOXO DECANT 2 5ml - 10ml Dama y Caballero", categoria: "decants", precio: 7.99 },
        
        // BODY SPRAY
        { nombre: "BODY SPRAY PERRY ELLIS 360 CLASICA 236ML DAMA", categoria: "body-spray", precio: 15.99 },
        { nombre: "BODY SPRAY LATTAFA FAKHAR 200ML CABALLERO", categoria: "body-spray", precio: 18.50 },
        { nombre: "BODY SPRAY LATTAFA MAYAR 200ML DAMA", categoria: "body-spray", precio: 17.99 },
        { nombre: "BODY SPRAY DKNY FRESH BLOSSOM 250ML DAMA", categoria: "body-spray", precio: 22.75 },
        { nombre: "BODY SPRAY LATTAFA HAYAATI 200ML", categoria: "body-spray", precio: 16.99 },
        { nombre: "BODY SPRAY LATTAFA BADE'E AL OUD AMETHYST 200ML UNISEX", categoria: "body-spray", precio: 19.50 },
        { nombre: "BODY SPRAY PERRY ELLIS 360 PURPLE 236ML DAMA", categoria: "body-spray", precio: 16.75 },
        
        // ESTUCHES CABALLERO
        { nombre: "SET PERRY ELLIS 360 RED EDT 100ML 4 PIEZAS", categoria: "estuches", precio: 89.99 },
        { nombre: "SET MOSCHINO TOY BOY EDP 100ML 4PZAS", categoria: "estuches", precio: 95.50 },
        { nombre: "SET SALVATORE FERRAGAMO UOMO SIGNATURE EDP 100ML 3 PIEZAS CABALLERO", categoria: "estuches", precio: 120.00 },
        { nombre: "SET JEAN PAUL GAULTIER SCANDAL EDT 100ML 3 PZAS", categoria: "estuches", precio: 110.75 },
        { nombre: "SET AFNAN 9 P.M EDP 3 PIEZAS CABALLERO", categoria: "estuches", precio: 85.99 },
        { nombre: "SET PACO RABANNE ONE MILLION EDT 100ML 3 PZAS CABALLERO", categoria: "estuches", precio: 125.50 },
        { nombre: "SET MONTBLANC EXPLORER EDP 100ML 3 PZAS", categoria: "estuches", precio: 115.75 },
        
        // ESTUCHES DAMA
        { nombre: "SET LATTAFA YARA (CLASICA Y CANDY) EDP 100ML 2 PIEZAS DAMA", categoria: "estuches", precio: 65.99 },
        { nombre: "SET PACO RABANNE LADY MILLION EDP 80ML 3 PIEZAS", categoria: "estuches", precio: 135.50 },
        { nombre: "SET SALVATORE FERRAGAMO SIGNIORINA RIBELLE EDP 3 PIEZAS DAMA", categoria: "estuches", precio: 125.75 },
        { nombre: "SET MOSCHINO TOY 2 BUBBLE GUMP EDP 3 PIEZAS", categoria: "estuches", precio: 95.99 },
        { nombre: "SET WOMENS SECRET GOLD SEDUCTION 2PZAS", categoria: "estuches", precio: 55.50 },
        { nombre: "SET GUESS SEDUCTIVE BLUE EDT 75ML 3PZAS DAMA", categoria: "estuches", precio: 85.75 },
        { nombre: "SET ARIANA GRANDE CLOUD EDP 100ML 3 PZAS DAMA", categoria: "estuches", precio: 105.99 }
    ];

    // Asignar IDs y generar descripciones e imágenes
    todosProductos = listaProductos.map((producto, index) => {
        return {
            id: index + 1,
            nombre: producto.nombre,
            categoria: producto.categoria,
            precio: producto.precio,
            descripcion: generarDescripcion(producto.nombre, producto.categoria),
            imagen: generarImagen(producto.categoria)
        };
    });

    // Inicializar productos
    inicializarProductos();
}

// Generar descripción automática basada en el nombre y categoría
function generarDescripcion(nombre, categoria) {
    const categorias = {
        'caballeros': 'Fragancia masculina de larga duración',
        'mujer': 'Perfume femenino con aroma persistente',
        'unisex': 'Fragancia unisex para cualquier ocasión',
        'decants': 'Versión de prueba en tamaño pequeño',
        'body-spray': 'Spray corporal refrescante',
        'estuches': 'Set completo con varios productos'
    };
    
    const descBase = categorias[categoria] || 'Perfume de alta calidad';
    
    if (nombre.toLowerCase().includes('edt')) {
        return descBase + ' en presentación Eau de Toilette';
    } else if (nombre.toLowerCase().includes('edp')) {
        return descBase + ' en presentación Eau de Parfum';
    } else if (nombre.toLowerCase().includes('parfum')) {
        return descBase + ' en concentración Parfum';
    }
    
    return descBase;
}

// Generar imagen basada en la categoría
function generarImagen(categoria) {
    const colores = {
        'caballeros': 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'mujer': 'https://images.unsplash.com/photo-1590736969954-6fb5a2e90e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'unisex': 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'decants': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'body-spray': 'https://images.unsplash.com/photo-1590736969954-6fb5a2e90e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'estuches': 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    };
    
    return colores[categoria] || 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
}

// Inicializar productos en las secciones
function inicializarProductos() {
    // Mostrar todos los productos en la sección principal
    mostrarProductos(todosProductos, '.products-grid');
    
    // Mostrar productos por categoría en sus respectivas secciones
    mostrarProductosPorCategoria('caballeros', '#caballeros-products');
    mostrarProductosPorCategoria('mujer', '#mujer-products');
    mostrarProductosPorCategoria('unisex', '#unisex-products');
    mostrarProductosPorCategoria('decants', '#decants-products');
    mostrarProductosPorCategoria('body-spray', '#body-spray-products');
    mostrarProductosPorCategoria('estuches', '#estuches-products');
    
    // Actualizar contador del carrito
    actualizarContadorCarrito();
}

// Mostrar productos en un contenedor
function mostrarProductos(productosArray, selectorContenedor) {
    const contenedor = document.querySelector(selectorContenedor);
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    productosArray.forEach(producto => {
        const productoHTML = `
            <div class="product-card" data-id="${producto.id}" data-category="${producto.categoria}">
                <div class="product-info">
                    <span class="product-category">${obtenerNombreCategoria(producto.categoria)}</span>
                    <h3>${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <div class="product-price">$${producto.precio.toFixed(2)}</div>
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${producto.id}">
                            <i class="fas fa-cart-plus"></i> Agregar
                        </button>
                        <button class="whatsapp-buy" data-id="${producto.id}">
                            <i class="fab fa-whatsapp"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        contenedor.innerHTML += productoHTML;
    });
}

// Mostrar productos por categoría
function mostrarProductosPorCategoria(categoria, selectorContenedor) {
    const productosCategoria = todosProductos.filter(p => p.categoria === categoria);
    mostrarProductos(productosCategoria, selectorContenedor);
}

// Obtener nombre de categoría para mostrar
function obtenerNombreCategoria(categoria) {
    const categorias = {
        'caballeros': 'Caballeros',
        'mujer': 'Mujer',
        'unisex': 'Unisex',
        'decants': 'Decants',
        'body-spray': 'Body Spray',
        'estuches': 'Estuches'
    };
    
    return categorias[categoria] || categoria;
}

// Inicializar event listeners
function inicializarEventListeners() {
    // Botón del carrito
    document.getElementById('cart-btn').addEventListener('click', toggleCarrito);
    document.getElementById('close-cart').addEventListener('click', toggleCarrito);
    
    // Botón de búsqueda
    document.getElementById('search-btn').addEventListener('click', buscarProductos);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') buscarProductos();
    });
    
    // Filtros de categoría
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-category');
            filtrarProductos(categoria);
        });
    });
    
    // WhatsApp order button
    document.getElementById('whatsapp-order').addEventListener('click', enviarPedidoWhatsApp);
    
    // WhatsApp contact button
    document.getElementById('whatsapp-contact').addEventListener('click', () => {
        enviarMensajeWhatsApp("Hola, me gustaría obtener más información sobre sus productos.");
    });
    
    // Clear cart button
    document.getElementById('clear-cart').addEventListener('click', vaciarCarrito);
    
    // Accept cookies button
    document.getElementById('accept-cookies').addEventListener('click', aceptarCookies);
    
    // Enlaces de políticas
    document.querySelectorAll('.privacy-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarModal('Política de Privacidad', `
                <h4>Política de Privacidad de Agape Parfum Collection</h4>
                <p>En Agape Parfum Collection respetamos y protegemos tu privacidad.</p>
                
                <h5>Información que recopilamos</h5>
                <p>Solo recopilamos información que nos proporcionas directamente cuando realizas una consulta o pedido a través de WhatsApp.</p>
                
                <h5>Contacto</h5>
                <p>Si tienes preguntas sobre esta política, contáctanos por WhatsApp al +58 412-7050149.</p>
            `);
        });
    });
    
    document.querySelectorAll('.terms-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarModal('Términos de Servicio', `
                <h4>Términos de Servicio de Agape Parfum Collection</h4>
                <p>Al utilizar nuestros servicios, aceptas los siguientes términos:</p>
                
                <h5>Pedidos y Pagos</h5>
                <p>Los pedidos se realizan exclusivamente a través de WhatsApp.</p>
                
                <h5>Contacto</h5>
                <p>Para cualquier consulta, contáctanos por WhatsApp al +58 412-7050149.</p>
            `);
        });
    });
    
    document.querySelectorAll('.cookies-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarModal('Política de Cookies', `
                <h4>Política de Cookies de Agape Parfum Collection</h4>
                <p>Utilizamos cookies únicamente para el funcionamiento básico del sitio web.</p>
            `);
        });
    });
    
    // Cerrar modal
    document.querySelector('.close-modal').addEventListener('click', cerrarModal);
    document.querySelector('.overlay').addEventListener('click', cerrarModal);
    
    // Delegación de eventos para botones dinámicos
    document.addEventListener('click', function(e) {
        // Botón agregar al carrito
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const id = parseInt(button.getAttribute('data-id'));
            agregarAlCarrito(id);
        }
        
        // Botón comprar por WhatsApp
        if (e.target.classList.contains('whatsapp-buy') || e.target.closest('.whatsapp-buy')) {
            const button = e.target.classList.contains('whatsapp-buy') ? e.target : e.target.closest('.whatsapp-buy');
            const id = parseInt(button.getAttribute('data-id'));
            comprarPorWhatsApp(id);
        }
        
        // Eliminar item del carrito
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const button = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
            const id = parseInt(button.getAttribute('data-id'));
            eliminarDelCarrito(id);
        }
        
        // Aumentar cantidad en carrito
        if (e.target.classList.contains('increase-quantity') || e.target.closest('.increase-quantity')) {
            const button = e.target.classList.contains('increase-quantity') ? e.target : e.target.closest('.increase-quantity');
            const id = parseInt(button.getAttribute('data-id'));
            cambiarCantidadCarrito(id, 1);
        }
        
        // Disminuir cantidad en carrito
        if (e.target.classList.contains('decrease-quantity') || e.target.closest('.decrease-quantity')) {
            const button = e.target.classList.contains('decrease-quantity') ? e.target : e.target.closest('.decrease-quantity');
            const id = parseInt(button.getAttribute('data-id'));
            cambiarCantidadCarrito(id, -1);
        }
    });
    
    // Cargar carrito guardado
    cargarCarritoGuardado();
}

// Funciones del carrito
function agregarAlCarrito(id) {
    const producto = todosProductos.find(p => p.id === id);
    if (!producto) return;
    
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function cambiarCantidadCarrito(id, cambio) {
    const item = carrito.find(item => item.id === id);
    if (!item) return;
    
    item.cantidad += cambio;
    
    if (item.cantidad < 1) {
        eliminarDelCarrito(id);
    } else {
        actualizarCarrito();
    }
}

function vaciarCarrito() {
    if (carrito.length === 0) return;
    
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        carrito = [];
        actualizarCarrito();
        mostrarNotificacion('Carrito vaciado');
    }
}

function actualizarCarrito() {
    // Actualizar contador
    actualizarContadorCarrito();
    
    // Actualizar items en el sidebar
    const contenedorItems = document.querySelector('.cart-items');
    const totalItems = document.getElementById('cart-items-total');
    
    if (carrito.length === 0) {
        contenedorItems.innerHTML = '<p class="empty-cart" style="text-align: center; color: #8D6E63; padding: 20px;">Tu carrito está vacío</p>';
        totalItems.textContent = '0';
        return;
    }
    
    let html = '';
    let totalProductos = 0;
    
    carrito.forEach(item => {
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.nombre}</h4>
                    <p>$${item.precio.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    <span class="cart-item-quantity">${item.cantidad}</span>
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        
        totalProductos += item.cantidad;
    });
    
    contenedorItems.innerHTML = html;
    totalItems.textContent = totalProductos;
    
    // Guardar carrito en localStorage
    localStorage.setItem('agape_carrito', JSON.stringify(carrito));
}

function actualizarContadorCarrito() {
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('cart-count').textContent = total;
}

function toggleCarrito() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.querySelector('.overlay');
    
    carritoAbierto = !carritoAbierto;
    
    if (carritoAbierto) {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
    } else {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    }
}

// Funciones de búsqueda y filtrado
function buscarProductos() {
    const termino = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (!termino) {
        mostrarProductos(todosProductos, '.products-grid');
        return;
    }
    
    const resultados = todosProductos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino) ||
        producto.descripcion.toLowerCase().includes(termino) ||
        producto.categoria.toLowerCase().includes(termino)
    );
    
    mostrarProductos(resultados, '.products-grid');
    
    // Mostrar mensaje si no hay resultados
    if (resultados.length === 0) {
        document.querySelector('.products-grid').innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p style="color: #8D6E63; font-size: 1.2rem; margin-bottom: 20px;">No se encontraron productos para "${termino}"</p>
                <button class="btn" id="clear-search" style="background-color: #8D6E63;">Mostrar todos los productos</button>
            </div>
        `;
        
        document.getElementById('clear-search').addEventListener('click', () => {
            document.getElementById('search-input').value = '';
            mostrarProductos(todosProductos, '.products-grid');
        });
    }
}

function filtrarProductos(categoria) {
    if (categoria === 'all') {
        mostrarProductos(todosProductos, '.products-grid');
        return;
    }
    
    const productosFiltrados = todosProductos.filter(p => p.categoria === categoria);
    mostrarProductos(productosFiltrados, '.products-grid');
}

// Funciones de WhatsApp
function comprarPorWhatsApp(id) {
    const producto = todosProductos.find(p => p.id === id);
    if (!producto) return;
    
    const mensaje = `Hola, estoy interesado en comprar: *${producto.nombre}*%0A%0A*Detalles:*%0A- Categoría: ${obtenerNombreCategoria(producto.categoria)}%0A- Precio: $${producto.precio.toFixed(2)}%0A- Descripción: ${producto.descripcion}%0A%0A¿Podrían darme más información?`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de enviar un pedido.');
        return;
    }
    
    let mensaje = `*PEDIDO AGAPE PARFUM COLLECTION*%0A%0A`;
    mensaje += `*Detalles del pedido:*%0A`;
    
    let total = 0;
    
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        mensaje += `%0A*${index + 1}. ${item.nombre}*%0A`;
        mensaje += `  Cantidad: ${item.cantidad}%0A`;
        mensaje += `  Precio unitario: $${item.precio.toFixed(2)}%0A`;
        mensaje += `  Subtotal: $${subtotal.toFixed(2)}%0A`;
    });
    
    mensaje += `%0A*TOTAL DEL PEDIDO: $${total.toFixed(2)}*%0A%0A`;
    mensaje += `Por favor, confirmen disponibilidad y formas de pago. Gracias.`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
    
    // Vaciar carrito después de enviar
    carrito = [];
    actualizarCarrito();
    toggleCarrito();
}

function enviarMensajeWhatsApp(texto) {
    const mensaje = encodeURIComponent(texto);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
}

// Funciones de cookies
function mostrarBannerCookies() {
    const cookiesAceptadas = localStorage.getItem('agape_cookies');
    
    if (!cookiesAceptadas) {
        setTimeout(() => {
            document.getElementById('cookies-banner').style.display = 'block';
        }, 3000);
    }
}

function aceptarCookies() {
    localStorage.setItem('agape_cookies', 'true');
    document.getElementById('cookies-banner').style.display = 'none';
}

// Funciones del modal
function mostrarModal(titulo, contenido) {
    document.getElementById('modal-title').textContent = titulo;
    document.getElementById('modal-body').innerHTML = contenido;
    document.getElementById('policy-modal').classList.add('active');
    document.querySelector('.overlay').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('policy-modal').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
}

// Función de notificación
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'notification';
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #8D6E63;
        color: #FFF8E1;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
        border: 1px solid #D7CCC8;
        font-weight: 500;
    `;
    
    // Estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notificacion);
    
    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Cargar carrito desde localStorage al iniciar
function cargarCarritoGuardado() {
    const carritoGuardado = localStorage.getItem('agape_carrito');
    if (carritoGuardado) {
        // Convertir IDs a productos actuales
        const ids = JSON.parse(carritoGuardado);
        carrito = ids.map(item => {
            const producto = todosProductos.find(p => p.id === item.id);
            return producto ? { ...producto, cantidad: item.cantidad } : null;
        }).filter(item => item !== null);
        
        actualizarCarrito();
    }
}
