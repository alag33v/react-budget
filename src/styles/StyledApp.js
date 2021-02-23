import styled from 'styled-components';

export const StyledApp = styled.div`
  h1 {
    text-align: center;
  }

  .balance-title {
    text-align: center;
  }

  .balance {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 28px;
      margin-left: 15px;
    }
  }

  .budget-wrapper {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .budget-item {
    margin: 0 50px;
    padding: 25px 50px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &__title {
      margin: 0 0 10px;
    }

    span {
      font-size: 20px;
    }
  }

  .budget--green {
    color: #3ea162;
  }

  .budget--red {
    color: #cc4f39;
  }

  .history__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;

    &--green {
      border-top-color: #3ea162;
      border-left-color: #3ea162;
    }

    &--red {
      border-top-color: #cc4f39;
      border-left-color: #cc4f39;
    }

    span {
      margin-left: auto;
    }

    .history-icons {
      margin-left: 50px;
    }

    .edit {
      width: 20px;
      height: 20px;
      fill: #ccc;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        fill: #000;
      }
    }

    .delete {
      width: 18px;
      height: 18px;
      margin-left: 15px;
      fill: #ccc;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        fill: #000;
      }
    }
  }

  .form__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .input__description {
      width: 75%;
      position: relative;

      input {
        padding: 5px 30px 5px 0;
      }

      .tag {
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        fill: #000;
        pointer-events: none;
        position: absolute;
      }
    }

    .input__value {
      width: 20%;
      position: relative;

      input {
        padding: 5px 0 5px 30px;
      }

      .dollar {
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        pointer-events: none;
        position: absolute;
      }

      .error {
        color: #cc4f39;
        margin-top: 5px;
        position: absolute;
      }
    }

    input {
      color: #221738;
      width: 100%;
      border: none;
      border-bottom: 2px solid #222;
      outline: none;
      cursor: pointer;
    }

    .form__btn {
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #6ba48a;
      background-color: #bbe8d3;
      display: inline-block;
      margin: 20px auto;
      width: 400px;
      height: 50px;
      padding: 5px 10px;
      border: 0;
      border-radius: 10px;
      transition: 0.3s;
      outline: none;
      cursor: pointer;

      &:hover {
        color: rgba(255, 255, 255, 0.7);
        background-color: #96e8c3;
      }

      &:active {
        color: rgba(255, 255, 255, 1);
        background-color: #65e0a9;
      }
    }
  }
`;
