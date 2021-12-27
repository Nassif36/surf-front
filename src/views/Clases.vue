<template>
  <section class="clases">
    <div class="clases-cards">

      <div class="card-middle">
        <div class="card-text">
          <ul>
            <li>Clases de 2hs de duración reales</li>
            <li>Incluye:</li>
            <li> <i class="fas fa-check"></i> Teoría y practica super completas</li>
            <li> <i class="fas fa-check"></i> Instructores experimentados 100 x 100</li>
            <li> <i class="fas fa-check"></i> Traje, Lycra y Tabla</li>
            <li> <i class="fas fa-check"></i> Todos los niveles</li>
          </ul>
        </div>
      </div>
      <div class="card-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
        >
          <path
            fill="#1ac6cc"
            fill-opacity="1"
            d="M0,224L20,213.3C40,203,80,181,120,154.7C160,128,200,96,240,80C280,64,320,64,360,69.3C400,75,440,85,480,122.7C520,160,560,224,600,213.3C640,203,680,117,720,96C760,75,800,117,840,138.7C880,160,920,160,960,165.3C1000,171,1040,181,1080,197.3C1120,213,1160,235,1200,229.3C1240,224,1280,192,1320,154.7C1360,117,1400,75,1420,53.3L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="form-clases">
      <form action="#">
        <div class="campo">
          <label for="nivel">Dia</label>
          <input type="date" placeholder="Elegí tu día!" />
        </div>
        <div class="campo">
          <label for="select">Horario</label>
          <select name="select" id="">
            <option disabled default>Elegi tu horario</option>
            <option value=""></option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="16">16</option>
            <option value="17">17</option>
          </select>
        </div>
        <div class="campo">
          <label for="select">Nivel</label>
          <select name="select" id="">
            <option disabled default>¿En que nivel estas?</option>
            <option value=""></option>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
            <option value="personalizado">Personalizado</option>
          </select>
        </div>
        <div class="campo">
          <div class="btn-form">
            Reservar
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "Clases",
};
</script>
<style lang="scss" scoped>
.clases {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 2em;
  @include section(transparent);
  @include gradient($blanco, $primary);
  @media screen and(max-width: 1100px) {
    flex-direction: column;
    padding: 0 0.5em;
    justify-content: center;
    height: max-content;
  }
}
.clases-cards {
  min-height: 100vh;
  display: grid;

  height: 100%;
  gap: 1em;
  flex-basis: 50%;

  @media screen and(max-width: 1100px) {
    flex-basis: 100%;
  }

  .card-middle {
    background-image: url(~@/assets/bg-home.jpg);
    background-size: cover;
    background-position: center;
    height: 100%;
    position: relative;
  }
  .card-bottom {

  position: absolute;
  transform: rotate(-90deg);
  right:10%;
  }

  svg {
    display: block;
    object-fit: cover;
    width: 100%;
  }
}

.form-clases {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-basis: 50%;
  min-height: 50vh;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    gap: 0.3em;
    width: 100%;
    max-width: 450px;
    @media screen and(max-width:1100px) {
      width: 100%;
      padding: 0 0.5em;
      gap: 0.3em;
    }
    @media screen and(max-width:550px) {
      flex-direction: column;
    }
    .campo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      justify-content: center;

      @media screen and(max-width:550px) {
        width: 100%;
        align-items: center;
      }
      input,
      select {
        @include button($blanco);
        max-width: 450px;
        margin: 0.3em 0;

        font-size: 1.2rem;
        color: black;
        @media screen and(max-width:1100px) {
          margin: 0.2em 0;
        }
      }
      .btn-form {
        @include button($green);
        margin-top: 1%;
        font-size: 1.2rem;
        max-width: 225px;
        cursor: pointer;
        @media screen and(max-width:1100px) {
          margin-top: 3%;
        }
        &:hover {
          background: $blanco;

          color: $negro;
        }
      }
    }
  }
}
</style>
