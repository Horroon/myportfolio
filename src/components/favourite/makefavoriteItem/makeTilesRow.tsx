import React, { useState, useEffect, useLayoutEffect } from 'react';
import Tile from './makeTile';

interface TilesRowFace {
    mainTitle: string,
    items: Array<ItemFace>,
    id: number
}

interface ItemFace {
    img: string,
    title: string
}

const TilesRow: React.FC<TilesRowFace> = (props): JSX.Element => {
    let [scroll, setScroll] = useState(0)
    let [scrollFullWidth, setScrollFullWidth] = useState(0)

    const scrollLeft = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        let ScrollMenu = document.getElementById(`scroll${props.id}`)
        if (ScrollMenu) {
            if (ScrollMenu.scrollWidth >= ScrollMenu.clientWidth) {
                if (scrollFullWidth > ScrollMenu.clientWidth) {
                    scroll += 20;
                    ScrollMenu.style.transform = "translateX(" + scroll + "px" + ")";
                    ScrollMenu.style.transition = "0.1s"
                    setScrollFullWidth(scrollFullWidth - 20)
                    setScroll(scroll)
                }
                else {
                    setScrollFullWidth(scrollFullWidth)
                    setScroll(0)
                }
            }
        }
    }

    const scrollRight = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        let ScrollMenu = document.getElementById(`scroll${props.id}`)
        if (ScrollMenu) {
            if (ScrollMenu.clientWidth <= ScrollMenu.scrollWidth) {
                if (scrollFullWidth <= ScrollMenu.scrollWidth) {
                    scroll -= 20;
                    setScroll(scroll)
                    ScrollMenu.style.transform = "translateX(" + scroll + "px" + ")";
                    ScrollMenu.style.transition = "0.1s"
                    setScrollFullWidth(scrollFullWidth + 20)

                } else {
                    console.log('else call')
                }
            }
        }
    }

    const WindowUpdate = () => {
        const ScrollParentWidth = document.getElementById(`scrl-prnt${props.id}`)
        const Scroll = document.getElementById(`scroll${props.id}`)
        if (ScrollParentWidth && Scroll) {
            if (ScrollParentWidth.clientWidth > Scroll.clientWidth) {
                Scroll.style.width = `${ScrollParentWidth.clientWidth}px`
                setScrollFullWidth(ScrollParentWidth.clientWidth)
            } else {
                setScrollFullWidth(Scroll.clientWidth)
            }
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', WindowUpdate)
        WindowUpdate()
        return () => window.removeEventListener('resize', WindowUpdate)
    }, [])

    console.log('scrollwidthFull', scrollFullWidth, scroll)
    return <div className="rw-cntr-fvrt">
        <div className="row" style={{ margin: 0 }}>
            <div className="tl-mn-hdng">
                <h3 style={{ color: 'white' }}>
                    {props.mainTitle}
                </h3>
            </div>
        </div>
        <div style={{ display: 'flex', overflow: 'hidden' }} id={`scrl-prnt${props.id}`}>
            <i className="fa fa-chevron-left scrl-dv-icn" onClick={scrollLeft} />
            <div className="scrollmenu" id={`scroll${props.id}`} style={{ margin: 0 }}>

                {
                    props.items.map((item, i) => <Tile img={item.img} title={item.title} key={i} />)
                }

            </div>
            <i className="fa fa-chevron-right scrl-dv-icn" onClick={scrollRight} />
        </div>
    </div>
}

export default TilesRow