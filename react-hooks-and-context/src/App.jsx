import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { A11yHidden, SR_Only, Banner } from './components';

// css prop
const skipToContentStyleMixin = {
  position: 'fixed',
  top: 0,
  left: 120,
};

function App() {
  return (
    <div className={styles.container}>
      <div
        className="skipToContent"
        css={`
          background: red;
        `}
      >
        <A11yHidden
          as="a"
          href="#section-1"
          style={skipToContentStyleMixin}
          focusable
        >
          Go Section 1
        </A11yHidden>
        <A11yHidden
          as="a"
          href="#section-2"
          style={skipToContentStyleMixin}
          focusable
        >
          Go Section 2
        </A11yHidden>
        <A11yHidden
          as="a"
          href="#section-3"
          style={skipToContentStyleMixin}
          focusable
        >
          Go Section 3
        </A11yHidden>
      </div>

      <h1>App</h1>

      <section>
        <h2 id="section-1">Section Title 1</h2>
        <SR_Only as="p" $focusable>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aut
          earum corporis amet fugiat nobis eligendi, repudiandae laboriosam illo
          dignissimos?
        </SR_Only>
        <p>
          Laudantium nesciunt asperiores ea dolor iusto suscipit fuga officia
          porro optio? Voluptate veniam ex ullam totam illum aliquid, reiciendis
          quia?
        </p>

        <Banner
          url="https://sk.com/upload/banner/20220905/20220905163123(0).jpg"
          height={500}
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <em>어스윗어스</em> (Earth with Us)
        </Banner>
      </section>

      <section>
        <h2 id="section-2">Section Title 2</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias iste? Itaque iste facere blanditiis nam? Sapiente aliquid
          consequatur tenetur?
        </p>
        <p>
          Sit reiciendis accusamus vitae, tempore eum eos numquam aliquid
          aperiam asperiores doloremque sed blanditiis adipisci modi quaerat
          tenetur corrupti dolores!
        </p>
        <p>
          Voluptate laborum atque sint quaerat sit ullam, corrupti iste at
          perspiciatis aliquid quis explicabo culpa, repellendus illo iure.
          Eius, consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid
          explicabo voluptatum sit veritatis sunt inventore dicta eaque
          quibusdam placeat similique in consequatur facilis voluptas nemo, rem
          libero, a aperiam!
        </p>
        <p>
          Expedita suscipit ullam sequi perferendis maiores cum neque, sint
          atque sit non porro distinctio quod quibusdam omnis possimus
          aspernatur rem quo similique adipisci consectetur iure qui. Quod ea
          numquam amet?
        </p>
        <p>
          Officia tenetur labore commodi, accusantium, qui excepturi explicabo
          maxime reprehenderit aspernatur unde sit dolorem eligendi recusandae!
          Optio impedit eum, voluptatum a ratione distinctio veniam quibusdam
          vitae perferendis, aut velit tempore!
        </p>
        <p>
          Quisquam, ipsum perspiciatis ipsam mollitia consequatur repellat.
          Mollitia nisi officia, veniam dolorem soluta reprehenderit iusto ipsum
          sunt! Optio pariatur, commodi, maiores architecto ducimus
          exercitationem, vel sequi sed alias dicta nisi!
        </p>
        <p>
          Nam, et velit repudiandae fugiat a quam quasi ullam enim provident
          iure reiciendis laboriosam, ab quod veritatis nisi non itaque vel
          porro! Sint aliquid ipsa et delectus, nulla voluptatum sequi.
        </p>
        <p>
          Nostrum error sit sunt minima labore iure? Provident non nihil libero
          similique dolores officia hic, ex magnam soluta eos fugiat pariatur
          aut impedit quasi consectetur sequi maiores est mollitia. Modi!
        </p>
        <p>
          Animi autem dolorem eum consequuntur aspernatur obcaecati reiciendis
          odit. Quos doloremque odit officiis? Eveniet beatae expedita incidunt
          ea sint ut consequuntur. Qui voluptatum iste cum doloribus. Sint a
          tenetur accusantium.
        </p>
        <p>
          Earum commodi natus facere dolorem a saepe alias ea eveniet
          accusantium dolore impedit ex explicabo non provident voluptatum nihil
          est corporis odit architecto similique eligendi, asperiores magnam!
          Veniam, ut eum?
        </p>
        <p>
          Optio nihil unde expedita facere libero architecto vel ipsum
          voluptatum reprehenderit. Nobis atque exercitationem rem quod ad
          molestiae, cupiditate dolore quasi, eum natus inventore vitae porro
          consequuntur quidem earum amet?
        </p>
        <p>
          Possimus commodi quod aut! Libero ullam quidem reiciendis a possimus
          inventore, sequi debitis pariatur ut unde laboriosam doloremque,
          officiis esse nisi fugiat fuga? Distinctio aliquam ipsam voluptates
          aut libero sapiente!
        </p>
      </section>
      <section>
        <h2 id="section-3">Section Title 3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          velit dicta soluta nihil voluptatibus dolor hic delectus illum
          distinctio. Non?
        </p>
        <p>
          Ad distinctio reiciendis est quisquam quo at unde eaque suscipit.
          Corrupti commodi amet quisquam eum eius porro? Nesciunt, iste labore.
        </p>
        <p>
          Quas eaque culpa atque enim accusantium sunt ducimus optio ex
          repudiandae nostrum soluta tempore omnis, error voluptates explicabo
          similique qui.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, velit
          deleniti culpa vero expedita tenetur ducimus dignissimos ipsam ullam
          saepe debitis molestias esse fugiat dolorem commodi modi nam molestiae
          earum?
        </p>
        <p>
          Recusandae natus fugiat minima delectus adipisci, voluptate dicta,
          blanditiis cupiditate repellendus facere sapiente laudantium unde
          dolores dignissimos voluptatibus rem maxime veniam? Dolorem molestias
          expedita assumenda id eligendi ipsam soluta illum?
        </p>
        <p>
          Nobis, a, ad eaque pariatur assumenda voluptates delectus, nihil illum
          deserunt nisi id cum consequatur odio cupiditate! Molestias animi
          illum nostrum aspernatur! Quidem explicabo cum mollitia. Delectus
          impedit amet unde!
        </p>
        <p>
          Et doloribus dolorem eligendi sed error facere hic, laboriosam quis
          nemo suscipit assumenda eius consequuntur velit laborum tempora
          veritatis in. Vel id doloribus atque voluptate laboriosam enim,
          debitis vitae voluptates?
        </p>
        <p>
          Esse, aperiam. Cum sit eligendi, optio corporis impedit earum quas
          sequi deleniti ut nobis quia aliquam fugit pariatur nisi accusantium
          sint, maxime harum rem quibusdam vero, minus nesciunt? Minima, qui!
        </p>
        <p>
          Ea eum ipsam repellendus autem minima officiis, consequuntur excepturi
          voluptatum? Nihil laborum eius velit fuga cumque voluptates corporis
          similique architecto libero placeat adipisci maiores deleniti, fugit
          officia dignissimos, ipsum at?
        </p>
        <p>
          Veritatis, minima? Quo vel ad adipisci. Maxime accusantium eligendi
          consequuntur ipsum laborum sit officiis sint nobis nam dicta a,
          necessitatibus saepe pariatur alias similique natus dignissimos
          dolores, voluptate omnis nostrum.
        </p>
        <p>
          Tempora veniam ducimus unde minima nesciunt nemo, aperiam nostrum qui
          molestiae eligendi dolor saepe repellendus eius debitis impedit
          voluptates deserunt facere facilis amet incidunt sunt quisquam beatae
          temporibus earum! Optio?
        </p>
        <p>
          Blanditiis perspiciatis placeat itaque, quidem fugiat sed, quo est
          ipsum laborum rerum debitis soluta enim obcaecati repudiandae
          voluptates possimus sapiente in mollitia corporis distinctio officia?
          Tempore nisi velit neque sit?
        </p>
        <p>
          Deserunt cupiditate cum tempora ipsa quo rem dolore officia ducimus
          sit sunt iste esse illo explicabo dignissimos in, ratione amet
          repellat corporis veritatis. Eius earum, amet ullam culpa ab fugiat?
        </p>
        <p>
          Eligendi fugiat, nisi accusamus, praesentium dolores, veniam
          voluptatum distinctio odio tempora ipsum quaerat laboriosam ea?
          Consequatur labore eaque quae sint, aliquid deserunt reprehenderit
          corrupti, consectetur nulla laudantium aspernatur incidunt
          perferendis!
        </p>
        <p>
          Sint, inventore! Harum fuga eaque dolorem mollitia! Dolores fuga
          consequatur ducimus expedita aliquam deserunt, quos asperiores
          voluptatum nemo facere in nihil nam laboriosam rerum nisi libero fugit
          distinctio quae voluptatem.
        </p>
        <p>
          Dolor voluptatibus porro ducimus consectetur voluptas ipsa assumenda
          voluptatum iste eaque dolores. Praesentium quas numquam tenetur sit
          quia asperiores? Natus repudiandae delectus vero, provident quod
          dolore? Ad distinctio voluptatum architecto.
        </p>
        <p>
          Inventore suscipit tenetur quos fugit cupiditate ab minus aliquam hic
          recusandae debitis odio accusamus dicta esse quo nam iusto doloribus
          deserunt delectus consectetur, asperiores molestiae? Eum assumenda
          necessitatibus ex! Optio.
        </p>
        <p>
          Ullam molestiae quis ipsum, recusandae obcaecati sed quaerat
          perferendis omnis reiciendis hic nostrum quos temporibus dolor
          voluptates distinctio soluta, illo labore quod sequi sit sunt minima
          tempora. Eaque, neque quisquam.
        </p>
        <p>
          Aliquam debitis maiores pariatur fugit veniam dignissimos! Quibusdam
          debitis delectus quos quae et, iste incidunt provident adipisci
          consequatur. At in aut adipisci nostrum velit ex maxime mollitia
          quibusdam dolore unde?
        </p>
        <p>
          Vel excepturi nobis ipsa quas iure officiis, totam, cumque incidunt
          molestiae nostrum repellat sequi nulla, corporis facilis illo fugit
          alias? Ea pariatur numquam accusantium adipisci rerum dignissimos eos
          beatae rem!
        </p>
        <p>
          Laudantium maiores non possimus ab, veritatis beatae dolor sint nobis
          provident animi, cumque incidunt maxime voluptatem, sunt
          necessitatibus inventore dolores quasi commodi. Veritatis distinctio
          iure vel odit reiciendis consequuntur! Itaque.
        </p>
        <p>
          Corrupti, magni consequuntur excepturi molestiae ea vitae! Facere,
          fuga eligendi blanditiis ipsam suscipit eveniet omnis, minus ex
          nostrum, facilis itaque similique asperiores! Dignissimos deserunt
          temporibus, odit ipsa perferendis necessitatibus quis.
        </p>
        <p>
          Omnis provident soluta sunt facilis, ullam corrupti totam
          reprehenderit tempore id odit laborum nisi temporibus a earum hic
          sequi qui officia non. Nesciunt dolor, ex aliquid enim molestiae modi
          tempore!
        </p>
      </section>
    </div>
  );
}

export default App;
