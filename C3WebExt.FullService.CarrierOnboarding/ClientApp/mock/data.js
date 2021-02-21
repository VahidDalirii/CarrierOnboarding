const testData = {
  items: [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }, { id: 4, name: 'name4' }],
};

const shipment = {
  items: [{idSHP: 1, sequenceNo: 'seq1337'}]
}

module.exports = {
  testData: () => testData,
};
