import React from "react";
import { Link } from "react-router-dom";
import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";

const HexaGrid = () => {
  return (
    <div className="w-full max-w-xl flex justify-center">
      <HexGrid width="100%" height="100%">
        <Layout size={{ x: 8, y: 8 }} origin={{ x: 0, y: 0 }} spacing={1.15}>
          <Link to="/">
            <Hexagon q={0} r={0} s={0}>
              <Text style={{ fontSize: "0.25rem" }}>Imazine</Text>
            </Hexagon>
          </Link>
          <Hexagon q={0} r={1} s={-1} fill="pat-2" />
          <Link to="/بیوتکنولوژی-دارویی">
            <Hexagon q={1} r={-1} s={0}>
              <Text>بیوتکنولوژی دارویی</Text>
            </Hexagon>
          </Link>
          <Link to="/فارماسیوتیکس">
            <Hexagon q={1} r={0} s={-1}>
              <Text>فارماسیوتیکس</Text>
            </Hexagon>
          </Link>
          {/*  */}
          <Link to="/داروسازی-بالینی">
            <Hexagon q={2} r={0} s={-2} className="hidden sm:block ">
              <Text>داروسازی بالینی</Text>
            </Hexagon>
            <Hexagon q={1} r={-2} s={-1} className="block sm:hidden ">
              <Text>داروسازی بالینی</Text>
            </Hexagon>
          </Link>
          {/*  */}
          <Link to="/نانوفناوری-دارویی">
            <Hexagon q={2} r={-1} s={-1} className="hidden sm:block">
              <Text>نانوفناوری دارویی</Text>
            </Hexagon>
            <Hexagon q={0} r={-2} s={-2} className="block sm:hidden ">
              <Text>نانوفناوری دارویی</Text>
            </Hexagon>
          </Link>
          {/*  */}
          <Link to="/کنترل-دارو-و-غذا">
            <Hexagon q={0} r={-1} s={1} className="block sm:hidden">
              <Text>کنترل دارو و غذا</Text>
            </Hexagon>
            <Hexagon q={3} r={-1} s={-2} className="hidden sm:block ">
              <Text>کنترل دارو و غذا</Text>
            </Hexagon>
          </Link>
          {/*  */}
          <Link to="/سم‌شناسی-و-داروشناسی">
            <Hexagon q={-1} r={1} s={0}>
              <Text style={{ fontSize: "0.1rem" }}>سم‌شناسی و داروشناسی</Text>
            </Hexagon>
          </Link>
          <Link to="/داروسازی-هسته‌ای">
            <Hexagon q={-1} r={0} s={1}>
              <Text>داروسازی هسته‌ای</Text>
            </Hexagon>
          </Link>
          {/*  */}
          <Link to="/فارماکوگنوزی">
            <Hexagon q={1} r={1} s={-2} className="block sm:hidden ">
              <Text style={{ fontSize: "0.15rem" }}>فارماکوگنوزی</Text>
            </Hexagon>
            <Hexagon q={-2} r={2} s={0} className="hidden sm:block ">
              <Text style={{ fontSize: "0.15rem" }}>فارماکوگنوزی</Text>
            </Hexagon>
          </Link>
          {/*  */}
          {/*  */}
          <Link to="/شیمی-دارویی">
            <Hexagon q={-2} r={1} s={1} className="hidden sm:block ">
              <Text style={{ fontSize: "0.15rem" }}>شیمی دارویی</Text>
            </Hexagon>
            <Hexagon q={0} r={2} s={-2} className="block sm:hidden ">
              <Text style={{ fontSize: "0.15rem" }}>شیمی دارویی</Text>
            </Hexagon>
          </Link>
          {/*  */}
          {/*  */}
          <Link to="/زیست-مواد-دارویی">
            <Hexagon q={-2} r={0} s={2} className="hidden sm:block ">
              <Text>زیست مواد دارویی</Text>
            </Hexagon>
            <Hexagon q={-1} r={-2} s={-2} className="block sm:hidden ">
              <Text>زیست مواد دارویی</Text>
            </Hexagon>
          </Link>
          {/*  */}
          {/*  */}
          <Hexagon
            q={-1}
            r={-1}
            s={2}
            fill="pat-2"
            className="block sm:hidden "
          />
          <Hexagon
            q={-3}
            r={2}
            s={1}
            fill="pat-2"
            className="hidden sm:block "
          />
          {/*  */}
          {/*  */}
          <Link to="/اقتصاد-و-مدیریت-دارو">
            <Hexagon q={-1} r={2} s={-1} className="block sm:hidden ">
              <Text>اقتصاد و مدیریت دارو</Text>
            </Hexagon>
            <Hexagon q={-3} r={1} s={2} className="hidden sm:block ">
              <Text>اقتصاد و مدیریت دارو</Text>
            </Hexagon>
          </Link>
          {/*  */}
          {/*  */}
          <Link to="/داروسازی-سنتی">
            <Hexagon q={2} r={-2} s={0} className="hidden sm:block ">
              <Text>داروسازی سنتی</Text>
            </Hexagon>
            <Hexagon q={1} r={-3} s={2} className="block sm:hidden ">
              <Text>داروسازی سنتی</Text>
            </Hexagon>
          </Link>
          {/*  */}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default HexaGrid;
