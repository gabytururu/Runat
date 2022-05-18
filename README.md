# Getting Started with Create React App

Este proyecto fue creado para la entrega final del curso de React en CoderHouse. 
La versión final está disponible en XXXX GITHUB XXXXXXXXXX
Si desea ver un recorrido básico de cómo funciona la aplicación puede verlo en este xxxxxx GIF


# RumboNaturaleza (RUNAT)
## _E-Commerce para reservar tours y actividades outdoors_

Rumbo Naturaleza es una aplicación de e-commerce realizada en ReactJS y motorizada por firebase para la gestión de las ordenes de compra e inventarios de los tours disponibles. 
El objetivo principal del flujo de procesos de la aplicación es generar una orden de compra que sea almacenada (en firebase) y que impacte el stock total disponible de cada uno de los productos (o tours en el caso de este proyecto. Los conceptos de "tour" y "producto" se utilizarán en la documentación de forma intercambiable pues representan lo mismo). 

## Proceso de Compra/ Flow de procesos
El flujo de procesos para realizar un proceso de compra es el siguiente:
0. Inicializar la aplicación (npm start) --> esto renderizará todo el menú de tours disponibles en RumboNaturaleza
    - Para renderizar las cards de los tours disponibles, la aplicación se apoyará en los estados "products, loading y title"; Así como en un useEffect el cual contiene las rutas necesarias para acceder al database de firestore (firestoreDB), retornar  los detalles de los tours disponibles(a través del uso de un Map), y colocarlos en las cards o fichas previstas por la estructura incluida en el return/JSX.  
    - En este mismo proceso, la aplicación llamará/cargara el componente ItemListcontainer y a los componentes hijos asociados a este componente principal --> ItemList -->Item. 
    -  Si se desea, en esta misma etapa del proceso, es posible filtrar por categoría de actividad. Esto se logra mediante una combinación de funcionalidades del componente NavBar y el componente ItemListContainer. En el NavBar se selecciona la categoría deseada  (ej escalada, biking, senderismo). Este mismo componente (el NavBar) incluye hooks de estado (categories/setCategories) y efecto (useEffect) asociados a las categorías. Este último (el useEffect) se conecta también a la base de datos de firebase (firestoreDB), a la collection "categories" lo cual permite traer o asignar la categoría elegida, y posteriormente gracias a las funciones de query y where de firebase/firestore incluidas en ItemListContainer, se comparan las categorías de firebase con la de los productos y se ejecuta el filtrado necesario . Esto como resultado hace que al seleccionar una categoría  en el NavBar se rendericen sólo los tours correspondientes a dicha categoría de actividades.
1. Elegir un tour y enviarlo al carrito. Para elegir un tour, debe hacer click en VER DETALLES. Esto renderizará la ficha con detalles específicos y opciones de compra de dicho tour:
    - Si no se cuenta con stock / lugares disponibles para ese tour, el usuario verá un mensaje que indica que el tour no está disponible y un botón para poder regresar al menú completo de tours. Esto funciona gracias a un ternario incluido en la sección del return/JSX del componente ItemCount, el cual recibe por props el stock disponible y es capaz de determinar en qué momento ya no se cuenta con stock y así no permitir que se agreguen al carrito tours sin stock. 
    - Si sí se cuenta con tours disponibles, el usuario podrá elegir el número total de lugares o espacios/personas para los cuales desea reservar, manipulando el contador generado en el componente ItemCount. 
    - El número máximo de lugares que la aplicación permitirá elegir, corresponde al stock total de dicho tour disponible en firebase. Esto funciona gracias al componente ItemCount el cual contiene la lógica para aumentar o disminuir cantidades, frenar en 0 como núm mínimo y frenar en el total de stock disponible como num máximo.
    - Si el usuario elige 0 lugares y da aceptar, la notificación de error indicará que esto no es posible. Esto se logra gracias al hook setNotification/useNotification (creado en el componente Notification y consumido en ItemDetail) el cual contiene los mensajes y acciones en caso de error o success.    
    - Una vez elegido el total deseado el usuario puede dar ACEPTAR y el tour se agregará a su carrito - lo cual opera gracias a la función "finalizarCompra" generada en el componente de ItemDetail
    - Una vez agregado el tour, el usuario podrá elegir si desea a. cambiar la reservación hecha, b. vaciar el carrito completo, c. ver más tours, o d. ver su carrito para continuar hacia el checkout. - todas estas opciones están previstas en la sección de JSX Del componente ItemDetail, en la cual se insertaron distintos eventos de "onClick" a los botones disponibles. Estos botones, llaman a funciones específicas creadas en el CartContext, que permiten hacer las acciones deseadas.
2. Carrito de compras. Cuando el usuario elige Ver el carrito, esto llevará a una tercera pantalla donde aparecerán todos los tours que fueron elegidos previamente y enviados al carrito. Desde este punto el usuario podrá:
    - Ver el total que deberá pagar si acepta ir al checkout con todos los tours en el carrito. Esto se logra gracias al consumo de la función sumaTotal traida desde el CartContext y consumida desde el componente Cart
    -  Quitar los tours que no desee adquirir seleccionando el botón QUITAR. Al hacerlo, dicho tour desaparecerá del carrito, y dejará de ser contabilizado como parte de la orden, tanto en cantidad de espacios reservados como en monto total a pagar. Esto se logra consumiendo la función de removeItem() del componente CartContext desde el componente CartItem (el cual está integrado / es llamado por el componente Cart).  
    -  Vaciar el carrito completo: si lo desea el usuario podrá vaciar el carrito completo en este punto lo cual lo llevará a una pantalla que notifica que el carrito está vacio y le permite volver a ver el total de tours disponibles. Esto se logra consumiendo desde el componente Cart, la función clearCart() traida desde el componente CartContext 
    -  Aceptar la lista de tours reservados y pasar al último paso: el checkout. 
3. Checkout - formulario de datos y confirmación de orden. Cuando el usuario da Aceptar (en la pantalla de carrito), la aplicación lo llevará a una última pantalla la recopilará sus datos principales a través de un formulario y permitirá crear la orden. 
    - Formulario: recopila nombre, teléfono y email del usuario a través del uso de hooks de estado (state, setState, useState) *NOTA: EL formulario no cuenta con Validaciones en JS para el tipo de datos que se inserte, sin embargo funciona correctamente. * - los datos recopilados son almacenados y posteriormente enviados a firebase al momento de crear la orden.
    - Creacion de orden: La creación de orden se ejecuta gracias a la función crearOrden() inlcuida en el componente Checkout. Esta función sirve para "subir" la información recopilada en el formulario, y la información de productos en el carrito,  a la base de datos de firebase.
    - La información del carrito es traída al componente Checkout a través de consumir el elemento "cart" del CartContext.
    - La información combinada del formulario y el carrito, se sube a la collection de firebase denominada  "ordenesCompraRecibidas", la cual asigna un ID automático el cual es posteriormente brindado al usuario como su "clave de reservación". 
    - Finalización del proceso: Una vez creada la orden, la aplicación presenta al usuario su clave de reservación en la pantalla (el id asignado por la collection de Firebase), y le permite Aceptar y Salir a través del botón Aceptar. Al hacerlo, la aplicación lo lleva a la pantalla de inicio y el proceso puede empezar de nuevo.
    - Además de generarse la orden, en la función crearOrden del componente Checkout, también se genera una actualización de la propiedad/dato "stock" incluida en la collection llamada "products" (también almacenada en firebase). 
    - Este dato, corresponde al stock de espacios disponibles para venta por cada tour. A través de las funciones writeBatch, documentId, y  queries de firebase/firestore, y la aplicación de filtros y métodos de array (ej. map y find) es posible realizar una actualización  que hace que la cantidad de espacios/reservaciones de tour incluida en la nueva orden de compra , sea sustraída del stock disponible a futuro del tour en cuestión. 

# Componentes, hooks y Funciones Principales empleados

A continuación se enlistan y describen de forma individual las funcionalidades y usos que fueron dados a los principales componentes, hooks y funciones utilizados en la aplicación. 

## Componentes
Los principales componentes, alojados en la carpeta src (en orden alfabético) son: 

- Cart: Consume el objeto Cart y las funciones (sumaTotal y clearCart) CartContext para mapear los tours elegidos y enviados al carrito por el usuario y se apoya en el componente CartItem para renderizarlos. 
- CartItem: se apoya en Props recibidos del Cart y el Context y en JSX para generar la estructura y estilos usados para la renderización de productos del carrito. Consume la función removeItem del CartContext.
- CartWidget: se apoya en la función qtyCartWidget del CartContext para crear la imagen del widget del carrito que posteriormente se renderiza en el navBar
- Checkout: Es el último paso del proceso de compra. Gestiona toda la lógica para (a.) recibir los datos del comprador, (b.) generar la orden de compra, (c.)enviar la orden de compra al backend(firestore), (d.)reflejar la reducción del stock como consecuencia de la compra,(e.)brindar el # de orden de compra al cliente. Se apoya en varias funciones del CartContext. 
- Item: proporciona los formatos y estructura esenciales (por medio del código JSX) Que le dan forma a las cards de producto que son renderizadas cuando se inicia la página/vista principal la cual contiene todos los tours disponibles (el formato de estos es tomado de este componente)
- ItemCount: Es la pantalla que permite al usuario ver los detalles del tour deseado y elegir el numero de reservaciones deseadas. También Contiene lógica para realizar (a.) selección de tours (agregar o quitar), (b.) indicar al usuario si el tour ya no está disponible (porque se ha consumido todo su stock) y con ello evitar que lo agregue a su carrito de compras.
- ItemDetail: Este componente brinda detalles adicionales a los que brinda el componente Item al usuario sobre cada tour. Este componente además contiene a ItemCount (explicado antes). Consume las funciones del context llamado "Notification" para enviar alertas de (a.) intentos de agregar 0 productos al carrito - notifica error (b.) confirmar agregación de productos/tours al rcarrito - notifica exito/success. También Consume varias de las funciones de cartContext para realizar la lógica de (a.)agregar elementos al carrito,(b.) eliminar elementos del carrito,(c.)vaciar el carrito por completo, (d.)verificar si un producto está en el carrito (e.) finalizar la compra y pasar a la confirmación o pasos siguientes del proceso. 
- ItemDetailContainer - sirve como contenedor del ItemDetail, para traer desde firestore todos los detalles que Itemdetail (explicado antes) requiere renderizar.
- ItemListcontainer: Funciona como contenedor y proceso de filtro para traer desde firebase los Items disponibles  (descritos en el componente Item) y poder filtrarlos por categorias. 
- NavBar: es el componente de navegación superior de la página, presenta las categorías de productos/tours disponibles y permite navegar y activar las filtraciones de ItemListContainer a través de las selección de categorías apalancándose en NavLink 

## Funciones utilizadas
Las funciones principales que fueron utilizadas son:

- addItem() - en el componente CartContext - agrega el producto seleccionado al carrito.
- qtyCartWidget() -en el componente CartContext-contabiliza el total de reservaciones seleccionadas por el usuario (num de personas totales en todos los tours elegidos)
- isInCart() -en el componente CartContext- verifica si un producto/tour se encuentra ya en el carrito o o no. 
- clearCart() -en el componente CartContext- vacia el carrito (elimina los tours que fueron previamente agregados)
- removeItem() -en el componente CartContext- elimina del carrito un tour específico pero mantiene el resto que hayan sido agregados al carrito
- sumaTotal() -en el componente CartContext- calcula el monto total a pagar por el usuario (es la suma del total de reservaciones realizadas)
- crearOrden() -ubicada en el componente Checkout - establece todo el proceso lógico para obtener la información del comprador, generar la orden de compra, enviarla a firebase y utilizar esta información para impactar el stock disponible por producto

## Hooks
Los hooks empleados fueron exclusivamente state/useState, useEffect y useContext. 
- State/SetState/UseState - fue utilizado siempre que fue requerido almacenar y manipular el valor o contenido de alguna variable o elemento. Se emplea en múltiples componentes tales como: CartContext, Checkout, ItemCount, ItemDetail, ItemListContainer y NavBar
- Context/UseContext: contiene todas las funciones lógicas para la creación y manipulación del carrito, antesala de compra y checkout. Es consumido en distintos componentes tales como Cart, CartItem, CartWidget,Checkout, ItemDetail y NavBar
- Notification: este contexto genera notificaciones temporales en la pantalla para indicar al usuario el éxito o error/advertencia en algunos procesos. Es consumido/Utilizado en ItemDetail



 ## Procesos en Firebase (Backend)
 La aplicación se apoya en el uso de Firestore DataBase en donde han sido almacenadas 3 colecciones principales:
 1. Products: Contiene todos los productos/tours disponibles almacenados como documentos/objetos con los siguientes datos o propiedades: {category: la categoría de la actividad la cual puede ser biking-escalada-senderismo, description: describe brevemente la actividad, fechas: describe la recurrencia o frecuencia del tour, img: contiene la dirección a la imágen del tour, name: nombre del tour -regularmente basado en el sitio del mismo, price: precio del tour, puntoPartida: describe el sitio de donde sale el tour, reserva: describe la antelación o requisitos para reservar, serviciosBrindados: describe lo que incluye el tour, stock: indica el stock o número de espacios disponibles en el tour}
 2. Categories: esta colección contiene 3 documentos, uno por cada categoría de actividad(senderismo, biking, escalada). Su función es permitir renderizar filtrando por categorías como se explicó en el componente ItemListcontainer
 3. ordenesCompraRecibidas: esta colección recibe las órdenes que completan el proceso de checkout y las va almacenando como documentos individuales. Los datos que cada orden incluye son los que están definidos en el objeto "ticketCompra" inlcuido en la función crearOrden() del componente Checkout.

Además de la gestión de productos, categorías y órdenes, firestore  controla el inventario disponible de cada tour (mediante las operación conjunta de las funciones collection, addDoc, getDocs y writeBatch ) 
- Cada vez que se realiza la compra de un producto, la información de la cantidad "comprada" es recibida por firestore, y actualizada en la colección "products" - todo ello mediante los procesos de la función crearOrden() del componente Checkout.  

## firebaseConfig/Security
Por razones de seguridad los detalles para inicializar la conexión con firebase fueron ocultados (mediante el .gitignore)

Es claro que en un proyecto normal/real estos datos deben mantenerse ocultos. 

Para fines de esta entrega final, en caso de que fueran necesarios para inicializar los procesos, los datos/llaves son compartidos a continuación:
--------------
REACT_APP_apiKey=AIzaSyDytpQMG3Mt1GnSyvDhl3ytiPmPiKZmvUM
REACT_APP_authDomain=runat-codertest.firebaseapp.com
REACT_APP_projectId=runat-codertest
REACT_APP_storageBucket=runat-codertest.appspot.com
REACT_APP_messagingSenderId=362498259750
REACT_APP_appId=1:362498259750:web:adc2e1fc319d350fca1fe7
--------------