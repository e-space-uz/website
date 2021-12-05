import React, { useState } from 'react'
import cls from './accordion.module.scss'

export default function Accordion({ data }) {
    const [selected, setSelected] = useState(null)
    function Toggle(e) {
        if (selected === e) {
            return setSelected(null)
        }
        setSelected(e)
    }

    return (
        <div className={cls.wrapper}>
            <div className={cls.accordion}>
                {data?.map((item, e) => (
                    <div className={cls.item}>
                        <button
                            onClick={() => Toggle(e)}
                            className={cls.accordion_btn}
                            type="button"
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <h2 className={cls.accordion_txt}>
                                    {item.desc}
                                </h2>
                                <img
                                    src={
                                        selected === e
                                            ? '/vectors/Top_icon.svg'
                                            : '/vectors/Bottom_icon.svg'
                                    }
                                    alt="vectorss"
                                    style={{ transition: '3s' }}
                                />
                            </div>
                        </button>
                        <div
                            className={
                                selected === e
                                    ? 'accordion_content show'
                                    : 'accordion_content'
                            }
                        >
                            <div className={cls.desc}>
                                <img
                                    className={cls.accordion_img}
                                    alt="accordion_photo"
                                    src={item.desc_img}
                                />
                                <div>
                                    <a>{item.desc_txt}</a>
                                    <p>{item.desc_size}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
