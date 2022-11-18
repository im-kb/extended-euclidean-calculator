function getGCDForTwo(a, b) {
    let x = 0;
    let y = 1;
    let lastX = 1;
    let lastY = 0;
    while (b !== 0) {
        let q = a / b;
        let r = a % b;

        a = b;
        b = r;

        let temp = x;
        x = lastX - (q * x);
        lastX = temp;

        temp = y;
        y = lastY - (q * y);
        lastY = temp;
    }

    return {
        "gcd": parseInt(a),
        "x": parseInt(lastX),
        "y": parseInt(lastY)
    }
}

function getGCDForThree(pa, pb, pc) {
    let a = parseInt(pa);
    let b = parseInt(pb);
    let c = parseInt(pc);
    let xy0 = getGCDForTwo(b, c)
    let xy1 = getGCDForTwo(a, xy0.gcd)
    let y = (xy1.y * xy0.x)
    let z = (xy1.y * xy0.y)

    return({
        "gcd": xy1.gcd,
        "x": xy1.x,
        "y": y,
        "z": z
    })
}