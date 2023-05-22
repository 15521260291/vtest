import Mock from "mockjs";

const data =  [
  {
    id: '1',
    label: 'test',
    value: 'test',
    fieldName: 'test',
    fieldType: 'text'
  },
  {
    id: '2',
    label: 'test2',
    value: {label: 'test2', value: '1'},
    fieldName: 'test2',
    fieldType: 'option',
    dataSet: [{label: 'test1', value: '1'}, {label: 'test2', value: '2'}]
  },
  {
    id: '3',
    label: 'test3',
    value: [{label: 'test1', value: '1'}, {label: 'test2', value: '2'}],
    fieldName: 'test3',
    fieldType: 'option-multiple',
    dataSet: [{label: 'test1', value: '1'}, {label: 'test2', value: '2'}]
  },
  {
    id: '4',
    label: 'test4',
    value: false,
    fieldName: 'test4',
    fieldType: 'boolean'
  },
  {
    id: '5',
    label: 'test5',
    value: 10,
    fieldName: 'test5',
    fieldType: 'progress'
  }
]

Mock.mock('/api/mockGetList', 'get', () => {
  return {
    code: "0",
    data,
  };

});

Mock.mock('/api/updateById', 'post', (options) => {
  const body = JSON.parse(options.body);
  const index = data.findIndex(item => item.id === body.id);
  if(index != -1){
    data[index].value = body.submitValue;
  }
  return {data};
})

export default Mock
