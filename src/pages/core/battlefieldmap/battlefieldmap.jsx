import React from "react";
import { Layout } from "../../../common/components";
import { useNavigate } from "react-router-dom";
import { entryRegion } from "../../../api/battlefield";
import { useDispatch } from "react-redux";

export const BattleFieldMap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickRegion = (regionId) => {
    entryRegion({ regionId }, navigate,dispatch);
  };

  return (
    <Layout>
      <div className="flex flex-1 flex-col items-center py-5">
        <table width="100%" border="0" cellSpacing="4" cellPadding="4">
          <tbody>
            <tr>
              <td className="h-[50px]">
                <img
                  border="0"
                  src="/pics/battle.gif"
                  width="400"
                  height="50"
                  align="right"
                />
              </td>
            </tr>
            <tr>
              <td align="center" className="leading-2 h-[50px]">
                <p className="text-center text-lg text-white font-bold">
                  Select the Region
                </p>
              </td>
            </tr>
            <tr>
              <td height="98" width="696" valign="top">
                <p align="center">
                  <map name="FPMap0">
                    <area
                      className="cursor-pointer"
                      alt="Free Territory"
                      shape="polygon"
                      coords="178, 67, 163, 30, 122, 11, 65, 16, 15, 28, 6, 52, 20, 58, 43, 52, 35, 76, 35, 89, 133, 93"
                      onClick={() => handleClickRegion(1)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Controlled by RGKevinRG with 5 troops"
                      onClick={() => handleClickRegion(2)}
                      shape="polygon"
                      coords="113, 154, 107, 144, 99, 129, 101, 117, 126, 123, 131, 106, 130, 97, 37, 94, 47, 128, 73, 145, 96, 160"
                    />
                    <area
                      className="cursor-pointer"
                      alt="Controlled by RGKevinRG with 5 troops"
                      shape="polygon"
                      coords="163, 290, 155, 268, 207, 195, 188, 169, 156, 154, 136, 142, 120, 145, 110, 167, 98, 183, 116, 214, 129, 241, 129, 275, 147, 292"
                      onClick={() => handleClickRegion(3)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Free Territory"
                      shape="polygon"
                      coords="281, 170, 366, 164, 352, 185, 354, 200, 371, 196, 367, 221, 360, 236, 343, 228, 333, 246, 311, 254, 296, 248, 290, 228, 284, 204"
                      onClick={() => handleClickRegion(4)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Free Territory"
                      shape="polygon"
                      coords="366, 151, 350, 146, 327, 104, 297, 102, 283, 94, 255, 99, 232, 128, 241, 154, 253, 165, 283, 159, 283, 165, 364, 159"
                      onClick={() => handleClickRegion(5)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Controlled by Phucked with 39243 troops"
                      shape="polygon"
                      coords="284, 55, 222, 48, 226, 96, 289, 88"
                      onClick={() => handleClickRegion(6)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Controlled by RGKevinRG with 5 troops"
                      shape="polygon"
                      coords="332, 28, 312, 14, 274, 18, 276, 50, 291, 50, 292, 90, 314, 94, 317, 51"
                      onClick={() => handleClickRegion(7)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Free Territory"
                      shape="polygon"
                      coords="318, 84, 321, 52, 337, 29, 405, 10, 558, 27, 543, 44, 542, 63, 527, 57, 521, 44, 501, 50, 501, 55, 508, 63, 509, 75, 443, 85, 363, 81"
                      onClick={() => handleClickRegion(8)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Controlled by Chairsofter with 10 troops"
                      shape="polygon"
                      coords="542, 272, 569, 231, 548, 190, 542, 204, 519, 196, 490, 215, 478, 232, 479, 254, 520, 249, 527, 271, 542, 276, 542, 267, 546, 267, 546, 273"
                      onClick={() => handleClickRegion(9)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Controlled by Marzipan with 5 troops"
                      shape="polygon"
                      coords="477,177,538,86,515,56,513,82,452,88,448,128,454,148,464,179,480,179"
                      onClick={() => handleClickRegion(10)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Free Territory"
                      shape="polygon"
                      coords="440, 133, 428, 163, 417, 160, 402, 132, 377, 87, 446, 89"
                      onClick={() => handleClickRegion(11)}
                    />
                    <area
                      className="cursor-pointer"
                      alt="Free Territory"
                      shape="polygon"
                      coords="389, 122, 362, 143, 352, 142, 329, 98, 319, 88, 373, 85"
                      onClick={() => handleClickRegion(12)}
                    />
                  </map>
                  <img
                    border="0"
                    src="/pics/map.gif"
                    width="570"
                    height="301"
                    useMap="#FPMap0"
                  />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
