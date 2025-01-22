function Calculator() {
    return <div id="calculator" className="calculator">
        <section id='numView' className='numView'>
            <p>0</p>
        </section>
        <section id='numBtn6' className='numBtn'>
            <button><i className="">C</i></button>
            <button><i className="">(</i></button>
            <button><i className="">)</i></button>
            <button><i className="">&#9003;</i></button>
        </section>
        <section id='numBtn5' className='numBtn'>
            <button><i className="">log</i></button>
            <button><i className="">tan</i></button>
            <button><i className="">sin</i></button>
            <button><i className="pi">π</i></button>
        </section>
        <section id='numBtn4' className='numBtn'>
            <button><i className="">7</i></button>
            <button><i className="">8</i></button>
            <button><i className="">9</i></button>
            <button><i className="">%</i></button>
        </section>
        <section id='numBtn3' className='numBtn'>
            <button><i className="">4</i></button>
            <button><i className="">5</i></button>
            <button><i className="">6</i></button>
            <button><i className="xi-close"></i></button>
        </section>
        <section id='numBtn2' className='numBtn'>
            <button><i className="">1</i></button>
            <button><i className="">2</i></button>
            <button><i className="">3</i></button>
            <button><i className="xi-minus"></i></button>
        </section>
        <section id='numBtn1' className='numBtn'>
            <button><i className="">.</i></button>
            <button><i className="">0</i></button>
            <button><i className="">=</i></button>
            <button><i className="xi-plus"></i></button>
        </section>
    </div>
}
export { Calculator };