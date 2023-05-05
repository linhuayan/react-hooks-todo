import React from "react";

const Some = ({ a, b }: { a: number, b: number }) => {
    const begin = Date.now();
    console.log('组件渲染了')
    while (1) {
        if (Date.now() - begin > 3000) {
            break;
        }
    }

    return (
        <div>
            <h2>Some {a + b}</h2>
        </div>
    )
}

export default Some;
