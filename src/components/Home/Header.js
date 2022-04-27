import React from 'react'
import Name from '../Home/Name'
import Print from '../Home/Print'

function Header() {
    return (
        <div id="hd">
            <div className="yui-gc">
                <Name />
                <Print />
            </div>
            {/*// .yui-gc */}
        </div>
    )
}

export default Header