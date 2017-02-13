const AnimalData = [{
  name: 'Kangaroo',
  thumbnail: require('./images/kangaroo-thumb.jpg'),
  content: ` <h1>Kangaroo</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet hendrerit scelerisque. Maecenas id nunc metus. Vivamus malesuada imperdiet urna fermentum euismod. Curabitur nec ultrices eros, sed auctor tortor. Nullam bibendum dapibus libero. Morbi sed posuere metus. Praesent ultrices laoreet tortor vitae vestibulum. Aenean eget lacinia lorem.</p>

    <p><img src="${require('./images/kangaroo.jpg')}" alt="A kangaroo"></p>

    <p>Proin volutpat vitae nulla at laoreet. Sed eu elit aliquam, finibus arcu in, dictum metus. Cras ornare ligula massa, fringilla eleifend mi tincidunt non. Donec ipsum nisl, pharetra in dignissim ut, interdum in quam. Quisque tristique dignissim magna. Vestibulum feugiat sit amet risus at placerat. Fusce finibus rhoncus molestie. Pellentesque sit amet porttitor erat. Duis nisl enim, finibus vitae mollis ut, malesuada eget lorem. Fusce commodo dui nibh, in tincidunt elit euismod sed. Praesent et pretium neque. Donec vitae lacus mauris. In rhoncus consectetur elementum. Pellentesque maximus, magna a interdum consectetur, sapien diam consequat est, eu feugiat est ante nec metus. Vestibulum mi nunc, tempus quis neque nec, elementum lobortis enim.</p>

    <p>In sapien massa, vulputate efficitur justo quis, aliquet vehicula metus. Vivamus risus lectus, congue vitae dui quis, finibus aliquam felis. Sed pharetra venenatis diam, vel placerat neque consectetur at. Vestibulum aliquet purus in massa consequat, vitae pharetra lacus fringilla. Nullam a maximus metus. Fusce aliquet arcu sit amet velit vehicula, sit amet fermentum velit facilisis. Etiam tempus feugiat semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu maximus neque, nec feugiat elit. Ut vitae malesuada est. Phasellus eu metus eu turpis posuere luctus non nec nisl. Aenean iaculis sem sed purus tincidunt bibendum fermentum et mi.</p>
  `,
},{
  name: 'Bear',
  thumbnail: require('./images/bear-thumbnail.jpg'),
  content: ` <h1>Bear</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet hendrerit scelerisque. Maecenas id nunc metus. Vivamus malesuada imperdiet urna fermentum euismod. Curabitur nec ultrices eros, sed auctor tortor. Nullam bibendum dapibus libero. Morbi sed posuere metus. Praesent ultrices laoreet tortor vitae vestibulum. Aenean eget lacinia lorem.</p>

    <p><img src="${ require('./images/bear.jpg') }" alt="A bear" />

    <p>Proin volutpat vitae nulla at laoreet. Sed eu elit aliquam, finibus arcu in, dictum metus. Cras ornare ligula massa, fringilla eleifend mi tincidunt non. Donec ipsum nisl, pharetra in dignissim ut, interdum in quam. Quisque tristique dignissim magna. Vestibulum feugiat sit amet risus at placerat. Fusce finibus rhoncus molestie. Pellentesque sit amet porttitor erat. Duis nisl enim, finibus vitae mollis ut, malesuada eget lorem. Fusce commodo dui nibh, in tincidunt elit euismod sed. Praesent et pretium neque. Donec vitae lacus mauris. In rhoncus consectetur elementum. Pellentesque maximus, magna a interdum consectetur, sapien diam consequat est, eu feugiat est ante nec metus. Vestibulum mi nunc, tempus quis neque nec, elementum lobortis enim.</p>

    <p>In sapien massa, vulputate efficitur justo quis, aliquet vehicula metus. Vivamus risus lectus, congue vitae dui quis, finibus aliquam felis. Sed pharetra venenatis diam, vel placerat neque consectetur at. Vestibulum aliquet purus in massa consequat, vitae pharetra lacus fringilla. Nullam a maximus metus. Fusce aliquet arcu sit amet velit vehicula, sit amet fermentum velit facilisis. Etiam tempus feugiat semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu maximus neque, nec feugiat elit. Ut vitae malesuada est. Phasellus eu metus eu turpis posuere luctus non nec nisl. Aenean iaculis sem sed purus tincidunt bibendum fermentum et mi.</p>
  `,
}, {
  name: 'Rabbit',
  thumbnail: require('./images/rabbit-thumbnail.jpg'),
  content: ` <h1>Rabbit</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet hendrerit scelerisque. Maecenas id nunc metus. Vivamus malesuada imperdiet urna fermentum euismod. Curabitur nec ultrices eros, sed auctor tortor. Nullam bibendum dapibus libero. Morbi sed posuere metus. Praesent ultrices laoreet tortor vitae vestibulum. Aenean eget lacinia lorem.</p>

    <p><img src="${ require('./images/rabbit.jpg') }" alt="A rabbit" />

    <p>Proin volutpat vitae nulla at laoreet. Sed eu elit aliquam, finibus arcu in, dictum metus. Cras ornare ligula massa, fringilla eleifend mi tincidunt non. Donec ipsum nisl, pharetra in dignissim ut, interdum in quam. Quisque tristique dignissim magna. Vestibulum feugiat sit amet risus at placerat. Fusce finibus rhoncus molestie. Pellentesque sit amet porttitor erat. Duis nisl enim, finibus vitae mollis ut, malesuada eget lorem. Fusce commodo dui nibh, in tincidunt elit euismod sed. Praesent et pretium neque. Donec vitae lacus mauris. In rhoncus consectetur elementum. Pellentesque maximus, magna a interdum consectetur, sapien diam consequat est, eu feugiat est ante nec metus. Vestibulum mi nunc, tempus quis neque nec, elementum lobortis enim.</p>

    <p>In sapien massa, vulputate efficitur justo quis, aliquet vehicula metus. Vivamus risus lectus, congue vitae dui quis, finibus aliquam felis. Sed pharetra venenatis diam, vel placerat neque consectetur at. Vestibulum aliquet purus in massa consequat, vitae pharetra lacus fringilla. Nullam a maximus metus. Fusce aliquet arcu sit amet velit vehicula, sit amet fermentum velit facilisis. Etiam tempus feugiat semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu maximus neque, nec feugiat elit. Ut vitae malesuada est. Phasellus eu metus eu turpis posuere luctus non nec nisl. Aenean iaculis sem sed purus tincidunt bibendum fermentum et mi.</p>
  `,
}, {
  name: 'Jaguar',
  thumbnail: require('./images/jaguar-thumbnail.jpg'),
  content: `
    <h1>Jaguar</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet hendrerit scelerisque. Maecenas id nunc metus. Vivamus malesuada imperdiet urna fermentum euismod. Curabitur nec ultrices eros, sed auctor tortor. Nullam bibendum dapibus libero. Morbi sed posuere metus. Praesent ultrices laoreet tortor vitae vestibulum. Aenean eget lacinia lorem.</p>

    <p><img src="${ require('./images/jaguar.jpg') }" alt="A Jaguar" /></p>

    <p>Proin volutpat vitae nulla at laoreet. Sed eu elit aliquam, finibus arcu in, dictum metus. Cras ornare ligula massa, fringilla eleifend mi tincidunt non. Donec ipsum nisl, pharetra in dignissim ut, interdum in quam. Quisque tristique dignissim magna. Vestibulum feugiat sit amet risus at placerat. Fusce finibus rhoncus molestie. Pellentesque sit amet porttitor erat. Duis nisl enim, finibus vitae mollis ut, malesuada eget lorem. Fusce commodo dui nibh, in tincidunt elit euismod sed. Praesent et pretium neque. Donec vitae lacus mauris. In rhoncus consectetur elementum. Pellentesque maximus, magna a interdum consectetur, sapien diam consequat est, eu feugiat est ante nec metus. Vestibulum mi nunc, tempus quis neque nec, elementum lobortis enim.</p>

    <p>In sapien massa, vulputate efficitur justo quis, aliquet vehicula metus. Vivamus risus lectus, congue vitae dui quis, finibus aliquam felis. Sed pharetra venenatis diam, vel placerat neque consectetur at. Vestibulum aliquet purus in massa consequat, vitae pharetra lacus fringilla. Nullam a maximus metus. Fusce aliquet arcu sit amet velit vehicula, sit amet fermentum velit facilisis. Etiam tempus feugiat semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu maximus neque, nec feugiat elit. Ut vitae malesuada est. Phasellus eu metus eu turpis posuere luctus non nec nisl. Aenean iaculis sem sed purus tincidunt bibendum fermentum et mi.</p>
  `,
}, {
  name: 'Lion',
  thumbnail: require('./images/lion-thumbnail.jpg'),
  content: `
    <h1>Lion</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet hendrerit scelerisque. Maecenas id nunc metus. Vivamus malesuada imperdiet urna fermentum euismod. Curabitur nec ultrices eros, sed auctor tortor. Nullam bibendum dapibus libero. Morbi sed posuere metus. Praesent ultrices laoreet tortor vitae vestibulum. Aenean eget lacinia lorem.</p>

    <p><img src="${ require('./images/lion.jpg') }" alt="A lion"></p>

    <p>Proin volutpat vitae nulla at laoreet. Sed eu elit aliquam, finibus arcu in, dictum metus. Cras ornare ligula massa, fringilla eleifend mi tincidunt non. Donec ipsum nisl, pharetra in dignissim ut, interdum in quam. Quisque tristique dignissim magna. Vestibulum feugiat sit amet risus at placerat. Fusce finibus rhoncus molestie. Pellentesque sit amet porttitor erat. Duis nisl enim, finibus vitae mollis ut, malesuada eget lorem. Fusce commodo dui nibh, in tincidunt elit euismod sed. Praesent et pretium neque. Donec vitae lacus mauris. In rhoncus consectetur elementum. Pellentesque maximus, magna a interdum consectetur, sapien diam consequat est, eu feugiat est ante nec metus. Vestibulum mi nunc, tempus quis neque nec, elementum lobortis enim.</p>

    <p>In sapien massa, vulputate efficitur justo quis, aliquet vehicula metus. Vivamus risus lectus, congue vitae dui quis, finibus aliquam felis. Sed pharetra venenatis diam, vel placerat neque consectetur at. Vestibulum aliquet purus in massa consequat, vitae pharetra lacus fringilla. Nullam a maximus metus. Fusce aliquet arcu sit amet velit vehicula, sit amet fermentum velit facilisis. Etiam tempus feugiat semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu maximus neque, nec feugiat elit. Ut vitae malesuada est. Phasellus eu metus eu turpis posuere luctus non nec nisl. Aenean iaculis sem sed purus tincidunt bibendum fermentum et mi.</p>
  `,
}, {
  name: 'Alligator',
  thumbnail: require('./images/alligator-thumbnail.jpg'),
  content: `
    <h1>Alligator</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet hendrerit scelerisque. Maecenas id nunc metus. Vivamus malesuada imperdiet urna fermentum euismod. Curabitur nec ultrices eros, sed auctor tortor. Nullam bibendum dapibus libero. Morbi sed posuere metus. Praesent ultrices laoreet tortor vitae vestibulum. Aenean eget lacinia lorem.</p>

    <p><img src="${ require('./images/alligator.jpg') }" /></p>

    <p>Proin volutpat vitae nulla at laoreet. Sed eu elit aliquam, finibus arcu in, dictum metus. Cras ornare ligula massa, fringilla eleifend mi tincidunt non. Donec ipsum nisl, pharetra in dignissim ut, interdum in quam. Quisque tristique dignissim magna. Vestibulum feugiat sit amet risus at placerat. Fusce finibus rhoncus molestie. Pellentesque sit amet porttitor erat. Duis nisl enim, finibus vitae mollis ut, malesuada eget lorem. Fusce commodo dui nibh, in tincidunt elit euismod sed. Praesent et pretium neque. Donec vitae lacus mauris. In rhoncus consectetur elementum. Pellentesque maximus, magna a interdum consectetur, sapien diam consequat est, eu feugiat est ante nec metus. Vestibulum mi nunc, tempus quis neque nec, elementum lobortis enim.</p>

    <p>In sapien massa, vulputate efficitur justo quis, aliquet vehicula metus. Vivamus risus lectus, congue vitae dui quis, finibus aliquam felis. Sed pharetra venenatis diam, vel placerat neque consectetur at. Vestibulum aliquet purus in massa consequat, vitae pharetra lacus fringilla. Nullam a maximus metus. Fusce aliquet arcu sit amet velit vehicula, sit amet fermentum velit facilisis. Etiam tempus feugiat semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu maximus neque, nec feugiat elit. Ut vitae malesuada est. Phasellus eu metus eu turpis posuere luctus non nec nisl. Aenean iaculis sem sed purus tincidunt bibendum fermentum et mi.</p>
  `,
}];

export default AnimalData;