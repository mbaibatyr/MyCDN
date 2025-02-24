var root = ReactDOM.createRoot(document.getElementById("app"));
function F1() {
    if (1 == 2)
        return <h2>Hello 1</h2>
    else
        return <h2>Hello 2</h2>
}

// class F2 extends React.Component {
// render() {
//     return <h2>qwerty1234</h2>;
// }
// }
root.render(
    <div>
        привет STEP 1234
        <h2>2 + 2 = {2 + 2}</h2>
        <F1 />
    </div>
);