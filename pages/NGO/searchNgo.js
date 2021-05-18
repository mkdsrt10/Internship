import { TagFaces } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/SearchNgo.module.css";
const SearchNgo = () => {
  const [tag, setTag] = useState([""]);
  const [ngoList, setNgoList] = useState([
    { category: "India", location: "India" },
    { category: "Australia", location: "Australia" },
    { category: "India", location: "India" },
  ]);
  const [ngoFilterList, setNgoFilterList] = useState([]);
  const [locations, setlocations] = useState([
    "India",
    "Australia",
    "South Africa",
  ]);
  const [categorys, setCategorys] = useState([
    "A",
    "B",
    "C",
  ]);
  const onChangeListner = (e) => {
    console.log(tag);
    var flag = 0;
    for (var i = 0; i < tag.length; i++) {
      if (tag[i] == e.target.value) {
        flag = 1;
        break;
      }
    }

    if (flag == 0) {
      setTag([...tag, e.target.value]);
    } else {
      setTag(tag.filter((t) => t !== e.target.value));
      console.log(tag);
    }
  };
  useEffect(() => {
    if (tag.length > 0 && tag[0] == "" && tag.length > 1) {
      setNgoFilterList(
        ngoList.filter((ngo) => {
          for (var i = 0; i < tag.length; i++) {
            if (tag[i] === ngo.location || tag[i] === ngo.category) return true;
          }
          return false;
        })
      );
      console.log(ngoFilterList);
    } else {
      console.log();
      setNgoFilterList(ngoList);
    }
  }, [tag]);
  return (
    <div className={styles.main_conatiner}>
      <div className={styles.search_bar}>
        <input type="text" onChange={(e) => {}} />
      </div>
      <div className={styles.search_container}>
        <div className={styles.filter}>
          <span>Category</span>
          <div className={styles.category}>
            {categorys.map((c, index) => {
              return (
                <div key={index}>
                  <label>
                    <input
                      value={c}
                      type="checkbox"
                      onChange={onChangeListner}
                    />
                    <span>{c}</span>
                  </label>
                </div>
              );
            })}
          </div>
          <span>Location</span>
          <div className={styles.location}>
            {locations.map((l, index) => {
              return (
                <div key={index}>
                  <label>
                    <input
                      value={l}
                      type="checkbox"
                      onChange={onChangeListner}
                    />
                    <span>{l}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.search_result_container}>
          {ngoFilterList.map((ngo) => {
            return (
              <div className={styles.ngo_grid}>
                <img src="/girl_mobile.png" />
                <div>{ngo.location}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchNgo;
