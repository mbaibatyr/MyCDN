var root = ReactDOM.createRoot(document.getElementById("app"));
function F1() {
    const title = "STEP";
    const title2 = "STEP2222222";
    if (1 == 2)
        return <h2>Hello {title}</h2>
    else
        return <h2>Hello {title2}</h2>
}

// class F2 extends React.Component {
// render() {
//     return <h2>qwerty1234</h2>;
// }
// }
root.render(
    <>
        привет STEP 1234
        {/* <h2>2 + 2 = {2 + 2}</h2> */}
        <F1 />
        <F1 />
        <F1 />
        <F1 />
        <p className=""></p>
    </>

);