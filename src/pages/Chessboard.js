import React from 'react';

const Chessboard = () => {
    const drawChessboard = (canvas) => {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const rows = 8;
        const cols = 8;
        const squareSize = canvas.width / rows;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                ctx.fillStyle = (row + col) % 2 === 0 ? 'black' : 'white';
                ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
            }
        }
    };

    return (
        <canvas
            ref={drawChessboard}
            width={400}
            height={400}
            style={{ display: 'block', margin: '20px auto', border: '1px solid black' }}
        ></canvas>
    );
};

export default Chessboard;
