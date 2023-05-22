export class BaseCompoent{
  public fieldObj: any = null;

  public value: any = null;

  public submitValue: any = null;

  public options = [];

  constructor() {
  }

  setValue(value: any): void{
    this.value = value;
    this.setSubmitValue(value);
  }

  init(item): void{
    this.fieldObj = item;
    if(item.fieldType === 'text'){
      this.value = item.value;
    }else if(item.fieldType === 'option'){
      this.value = item.value?.value;
    }else if(item.fieldType === 'option-multiple'){
      this.value = item.value.map((item: { value: any; }) => item.value);
    }else{
      this.value = item.value;
    }

    if(item.fieldType === 'option'){
      if(item.dataSet){
        this.options = item.dataSet;
      }else if(item.url){
        this.options = [];
      }
    }else if(item.fieldType === 'option-multiple'){
      if(item.dataSet){
        this.options = item.dataSet;
      }else if(item.url){
        this.options = [];
      }
    }

    this.setSubmitValue(this.value);
  }

  valueChange(event): void{
    console.log('valueChange')
    let value = null;
    if(this.fieldObj.fieldType === 'text'){
      value = event.target.value;
    }else if(this.fieldObj.fieldType === 'option'){
      value = event;
    }else if(this.fieldObj === 'option-multiple'){
      value = event;
    }else{
      value = event;
    }
   // console.log(event.target.value, 'change')
    this.setSubmitValue(value);
  }

  setSubmitValue(value: any): void{
    if(value == null){
      this.submitValue = null;
    }else{
      if(this.fieldObj.fieldType === 'text'){
        this.submitValue = value;
      }else if(this.fieldObj.fieldType === 'option'){
        this.submitValue = this.options.find(item => item.value === value);
      }else if(this.fieldObj.fieldType === 'option-multiple'){
        this.submitValue = this.options.filter(item => value.includes(item.value));
      }else{
        this.submitValue = value;
      }
    }

  }


  getSubmitValue(): any{
     return {
       id: this.fieldObj.id,
       submitValue: this.submitValue
     }
  }

}
