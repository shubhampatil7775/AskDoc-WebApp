import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <a href="/covid">
        <img
          src="https://blog.werobotics.org/wp-content/uploads/2020/04/animated-graphic-2019-ncov.jpg"
          alt=""
        />
        <p>Covid</p>
        </a>
      </div>

      <div className="sidebarOption">
       <a href="/vaccination"><img
          src="https://si.wsj.net/public/resources/images/B3-HN427_vaxsup_SOC_20201211162211.gif"
          alt=""
        />

        <p>Covid Vaccination</p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/fever"><img
          src="https://image.shutterstock.com/image-vector/young-ill-man-cough-sick-260nw-1565244175.jpg"
          alt=""
        />
        <p>Fever,Cough</p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/heart"><img
          src="https://image.shutterstock.com/image-vector/cute-cartoon-sad-human-heart-260nw-453996709.jpg"
          alt=""
        />
        <p>Heart </p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/abdomen"><img
          src="https://thumbs.dreamstime.com/z/hurt-stomach-pain-man-was-ache-hold-his-hand-cartoon-67057214.jpg"
          alt=""
        />
        <p>Abdomen</p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/weight"><img
          src="https://image.shutterstock.com/image-vector/feet-on-weighing-scales-overweight-260nw-1080187154.jpg"
          alt=""
        />
        <p>Weight</p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/eyes"><img
          src="https://image.shutterstock.com/image-vector/icon-set-five-human-senses-260nw-1782225056.jpg"
          alt=""
        />
        <p>Eyes,ears,Nose</p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/muscle"><img
          src="https://image.shutterstock.com/image-vector/young-man-crying-painful-on-260nw-1016828800.jpg"
          alt=""
        />
        <p>Muscle Pain</p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/gynic"><img
          src="https://cdn4.vectorstock.com/i/thumb-large/10/23/woman-having-consultation-with-gynecologist-vector-28331023.jpg"
          alt=""
        />
        <p>Gynic</p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/kidney"><img
          src="https://t4.ftcdn.net/jpg/02/72/25/87/360_F_272258728_LWOA70FSLXFzhOLFedNexVvyxNAe3dNF.jpg"
          alt=""
        />
        <p>Kidney</p>
        </a>
      </div>

      <div className="sidebarOption">
      <a href="/others"><img
          src="https://st2.depositphotos.com/1206312/6381/v/600/depositphotos_63819967-stock-illustration-helping-hand.jpg"
          alt=""
        />
        <p>Other</p>
        </a>
      </div>
      
    </div>
  );
}

export default SidebarOptions;
