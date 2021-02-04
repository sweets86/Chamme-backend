import React from "react";
import BlogCompositionStyled from "./BlogCompositionStyled";

export default function ReuseComposition() {
  return (
    <BlogCompositionStyled>
      <h1>Blog</h1>
      <div className="contain">
        <div className="blogContent">
          <div className="mainBlog">
            <h2>Blog Content 1</h2>
            <p>
              Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.
              Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd
              boksättare tog att antal bokstäver och blandade dem för att göra
              ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem
              århundraden, utan även övergången till elektronisk typografi utan
              större förändringar. Det blev allmänt känt på 1960-talet i samband
              med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och
              senare med mjukvaror som Aldus PageMaker. Varför använder vi det?
              Det är ett välkänt faktum att läsare distraheras av läsbar text på
              en sida när man skall studera layouten. Poängen med Lorem Ipsum är
              att det ger ett normalt ordflöde, till skillnad från "Text här,
              Text här", och ger intryck av att vara läsbar text.
            </p>
          </div>
          <div className="sideBlog">
            <div className="sideContent">
              <h2>Blog Content 2</h2>
              <p>
                Lorem Ipsum är en utfyllnadstext från tryck- och
                förlagsindustrin. Lorem ipsum har varit standard ända sedan
                1500-talet, när en okänd boksättare tog att antal bokstäver och
                blandade dem för att göra ett provexemplar av en bok. Lorem
                ipsum har inte bara överlevt fem århundraden, utan även
                övergången till elektronisk typografi utan större förändringar.
              </p>
            </div>
            <div className="sideContent">
              <h2>Blog Content 3</h2>
              <p>
                Många publiseringprogram och webbutvecklare använder Lorem Ipsum
                som test-text, och en sökning efter "Lorem Ipsum" avslöjar många
                webbsidor under uteckling. Olika versioner har dykt upp under
                åren, ibland av olyckshändelse, ibland med flit (mer eller
                mindre humoristiska). Var kommer det ifrån? I motsättning till
                vad många tror, är inte Lorem Ipsum slumpvisa ord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogCompositionStyled>
  );
}
