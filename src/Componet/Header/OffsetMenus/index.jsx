import React from 'react'
import OffsetMenu from './OffsetMenu'
import SearchArea from './Search'
import ShopCart from './ShopCart'


const OffsetMenus = () => {
  return (
    <div class="offset__wrapper">
            {/* <!-- Start Search Popap --> */}
            <SearchArea />
            <ShopCart />
            <OffsetMenu />
        </div>


  )
}

export default OffsetMenus