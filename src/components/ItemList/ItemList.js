import Item from '../Item/Item'
import { memo } from 'react'

const ItemList = ({products}) => {
    return(
        <div onClick={() => console.log('hice click al ItemList')}>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

//aplicando el memo para evitar que se re-renderice a la hora que se renderiza el titulo con delay de 2 segundos de ItemListContainer
// export default memo(ItemList)

// como segundo parametro de la función memo, es posible pasarle una función que sirve para comparar por ejemplo props anteriores con props nuevas que aparecieron en ese re-renderizado y hacer a partir de ello una comparación basada en una fecha de modificacion. Eso me permite escuchar el cambio de una fecha de modificación.. por ejemplo si se actualiza un stock en la base de datos... con estas tecnicas podríamos por ejemplo decirle a react "si el stock del item es igual al stock de este momento entonces muestrame lo que ya tenías y no recalcules" o ... "si la fecha de modificacion del estado anterior es igual a la del nuevo render o nuevas props entonces guardalo y muestrame lo misom" pero si es distinto, enotnces si re-rendereame todo.
// este tipo de tecnicas son muy buenas cuando los cambios se vinculan a asepectos más soficsticados que el ejemplo del título que acabamos de ver. 
//Seba sin embargo señala que el "memo" es un tool que no necesariamente es muy usado porque hoy hay nuevas soluciones como el lazyload.  entonces, es bueno saberlo, pero quien sabe si se use por eso mismo es que aca para el ejmplo dejo mejor la forma previa mas simple
// export default memo(ItemList, (oldProps, newProps) => {})

export default memo(ItemList)

 

