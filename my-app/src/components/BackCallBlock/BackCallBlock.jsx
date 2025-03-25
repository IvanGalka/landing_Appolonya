import styled from './backcallblock.module.css';

function BackCallBlock() {
  return (
    <div className={styled.container}>
      <div className={styled.wrapper}>
        <div className={styled.formBlock}>
          <h2 className={styled.title}>Заказать обратный звонок</h2>
          <span className={styled.descript}>Наш сотрудник ответит вам в ближайшее время.</span>
          <form className={styled.form} action="/">
            <div className={styled.inputsBlock}>
              <div className={styled.inputWrapper}>
                <span className={styled.nameInput}>Имя</span>
                <input className={styled.input} placeholder='Имя' type="text" />
              </div>
              <div className={styled.inputWrapper}>
                <span className={styled.nameInput}>Телефон *</span>
                <input className={styled.input} placeholder='+7 (___) ___-__-__' type="text" />
              </div>
            </div>
            <button className={styled.submitBtn}>
              Заказать звонок
            </button>
          </form>
        </div>
        <img src="/image/call-back-img.png" alt="call-back" />
      </div>
    </div>
  );
}

export default BackCallBlock;