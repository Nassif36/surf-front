<template>
  <section class="clases">
    <div class="clases-cards">
      <article class="card">
        <div class="card-img">
          <img src="~@/assets/pexels.jpg" alt="">
        </div>

        <div class="card-text">
          <h3>Principiante</h3>
          <p>Comenza tu camino en el mundo del surf</p>
        </div>
        
      </article>
       <article class="card">
        <div class="card-img">
          <img src="~@/assets/pexels.jpg" alt="">
        </div>

        <div class="card-text">
          <h3>Intermedio</h3>
          <p>Seguí mejorando surfeando olas amigables</p>
        </div>
        
      </article>
       <article class="card">
        <div class="card-img">
          <img src="~@/assets/pexels.jpg" alt="">
        </div>

        <div class="card-text">
          <h3>Avanzado</h3>
          <p>Pulí tu técnica en un nivel mas alto</p>
        </div>
        
      </article>
       <article class="card">
        <div class="card-img">
          <img src="~@/assets/pexels.jpg" alt="">
        </div>

        <div class="card-text">
          <h3>Personalizado</h3>
          <p>Mejora cuestiones especificas de tu surfing</p>
        </div>
        
      </article>
    </div>
    <div class="form-clases">
      <form action="#">
        <div class="campo">
          <label for="nivel">Dia</label>
          <input type="date" placeholder="Elegí tu día!">
        </div>
        <div class="campo">
          <label for="horario">Horario</label>
          <input type="time" placeholder="Elegí un horario">
        </div>
        <div class="campo">
          <label for="select">Nivel</label>
          <select name="select" id="">
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
      <div class="clases-info">
        <ul>
          <li><i class="fas fa-check"></i> Instructores experimentados</li>
          <li><i class="fas fa-check"></i> Teoría y practica super completas</li>
          <li><i class="fas fa-check"></i> Traje, Lycra y tabla</li>
          <li><i class="fas fa-check"></i> Todos los niveles</li>
        </ul>
        <p>Clase grupal : 2200$</p>
        <p>Clase particular: 2700$</p>
        <p>Curso de 10 clases: 30 $ OFF</p>
      </div>
    </div>
  </section>
</template>
<script>


export default {
  name: 'Clases',

}

</script>
<style lang="scss" scoped>

.clases {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2em;
  @include section(transparent);
  @include gradient($blanco, $primary)
}
.clases-cards {
 
  display: grid;
  grid-template-columns: repeat(2, 37%);
  gap: 1em;
  padding: 2% 0 0 0;
  flex-basis: 47%;
  place-content: center;


  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 350px;
    min-width: 150px;
    border-radius: 3px;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid $secondary;
    }
     background: $blanco;
     @include shadow;
     .card-text {
       height: 100%;
       padding: 1em ;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       text-align: center;
     }
    img {
      width: 100%;
      display: block;
      border-radius: 3px;

    }
  }
}

  .form-clases {
    display: flex;
    align-items:center;
    flex-direction: column;
    flex-basis: 50%;
    min-height: 50vh;
    form {
      display: flex;
      align-items: center;
      gap: 1em;
      

      .campo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        input, select {
         
          @include button($blanco);
          font-size: 1.2rem;
           color: black;
          
        }
        .btn-form {
            @include button($green);
            margin-top: 33%;
             font-size: 1.2rem;
            cursor: pointer;
            &:hover {
              background: $blanco;
              transform: rotate(5deg);
              color: $negro;
            }
        }
       
      }
    }
    .clases-info {
      max-width: 666px;
      ul {
        display: flex;
        gap: 1em;
        align-items: center;
        flex-wrap: wrap;
        li {
          color: $blanco;
          font-weight: 600;
          font-size: 1.1rem;
          i {
            color: $green;
          }
        }
      }
    }
  }


</style>