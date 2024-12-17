import React, { Component } from "react";
import SelectSearch from "react-select-search";
import lakes from "./lakes.json";
import logo from "./img/logo.png";
import "react-select-search/style.css";
import "./App.css";

class File extends Component {
  render() {
    var { id, metadata } = this.props.file;
    return (
      <div className="file">
        <div className="filename">{id}</div>
        <div className="close" onClick={() => this.props.removeFile(id)}>
          &times;
        </div>
        {metadata.map((m) => (
          <Input
            {...m}
            onChange={(event, label) => this.props.onChange(event, label, id)}
            key={id + "_" + m.label}
          />
        ))}
      </div>
    );
  }
}

class Input extends Component {
  render() {
    var { type, value, label, example, css, error, onChange } = this.props;
    var options = lakes.map((l) => {
      l.value = l.name;
      return l;
    });
    return (
      <div className={error ? "form-input error " + css : "form-input " + css}>
        <span className="label">{label}</span>
        <div className="error">
          {typeof error === "boolean" ? "Required" : error}
        </div>
        {type === "lakes" ? (
          <SelectSearch
            search={true}
            options={options}
            value={value}
            placeholder={example}
            onChange={(event) => onChange(event, label)}
          />
        ) : type === "select" ? (
          <select
            value={value}
            onChange={(event) => onChange(event, label)}
          >
            {this.props.options.map(o => <option value={o} key={o}>{o}</option>)}
          </select>
        ) : (
          <input
            type={type}
            placeholder={example}
            value={value}
            onChange={(event) => onChange(event, label)}
          />
        )}
      </div>
    );
  }
}

class App extends Component {
  state = {
    campaign: [
      {
        type: "text",
        value: "",
        label: "Campaign Name",
        example: "CTD profiles",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "text",
        value: "",
        label: "Project Name",
        example: "Project X",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "select",
        value: "Sea&Sun CTD (189)",
        label: "Device",
        example: "Sea&Sun CTD (189)",
        options: [
          "Sea&Sun CTD (189)",
          "Sea&Sun CTD (281)",
          "Sea&Sun CTD (1807)",
          "Seabird CTD (6090)",
          "Seabird CTD (7322)",
          "RBR CTD (205750)",
          "RBR CTD (66131)",
          "RBR CTD (60506)",
          "Other - Add type to comments"],
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "text",
        value: "",
        label: "Serial No",
        example: "xxxxx",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "text",
        value: "",
        label: "Person in charge",
        example: "Paula Probe",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "text",
        value: "",
        label: "Other people involved",
        example: "Henry Helpinghand, Sandra Supporty",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "date",
        value: "",
        label: "Date of measurement",
        example: "",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "0",
        label: "Time Zone device (UTC+)",
        example: "0",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "1",
        label: "Time Zone local (UTC+)",
        example: "1",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "lakes",
        value: "",
        label: "Lake",
        example: "Geneva",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "select",
        value: "CH1903 (Swiss Grid)",
        label: "Coordinate System",
        example: "CH1903 (Swiss Grid)",
        options: ["CH1903 (Swiss Grid)", "WGS84 (Latitude, Longitude)"],
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "372",
        label: "Altitude (m)",
        example: "372",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "text",
        value: "",
        label: "General comment",
        example: "Rainy, windy",
        validate: "none",
        css: "full",
        error: false,
      },
    ],
    files: [],
    fileMetadata: [
      {
        type: "text",
        value: "",
        label: "Profile name",
        example: "P00",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "time",
        value: "",
        label: "Time of measurement (local)",
        example: "12:00",
        validate: "string",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "",
        label: "X Coordinate (CH1903)",
        example: 533000,
        validate: "xcoord",
        filter: "CH1903 (Swiss Grid)",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "",
        label: "Y Coordinate (CH1903)",
        example: 146000,
        validate: "ycoord",
        filter: "CH1903 (Swiss Grid)",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "",
        label: "Latitude",
        example: 46.5,
        validate: "lat",
        filter: "WGS84 (Latitude, Longitude)",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "",
        label: "Longitude",
        example: 6.67,
        validate: "lng",
        filter: "WGS84 (Latitude, Longitude)",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "",
        label: "Start pressure (dbar)",
        example: "",
        validate: "none",
        css: "half",
        error: false,
      },
      {
        type: "number",
        value: "",
        label: "End pressure (dbar)",
        example: "",
        validate: "none",
        css: "half",
        error: false,
      },
      {
        type: "checkbox",
        value: false,
        label: "Something broke",
        example: "",
        validate: "none",
        css: "half",
        error: false,
      },
      {
        type: "checkbox",
        value: false,
        label: "Something got lost",
        example: "",
        validate: "none",
        css: "half",
        error: false,
      },
      {
        type: "checkbox",
        value: false,
        label: "Something is strange",
        example: "",
        validate: "none",
        css: "half",
        error: false,
      },
      {
        type: "checkbox",
        value: false,
        label: "Battery is empty",
        example: "",
        validate: "none",
        css: "half",
        error: false,
      },
      {
        type: "checkbox",
        value: false,
        label: "Battery was replaced",
        example: "",
        validate: "none",
        css: "half",
        error: false,
      },
      {
        type: "text",
        value: "",
        label: "Other comment",
        example: "Transect 1",
        validate: "none",
        css: "full",
        error: false,
      },
    ],
    validated: false,
    extensions: [".tob", ".rsk", ".cnv"],
  };
  validate = (value, type) => {
    if (type === "none") {
      return false;
    } else if (type === "string") {
      if (value.length > 0) {
        return false;
      }
    } else if (type === "xcoord") {
      if (value) {
        if (value > 420000 && value < 900000) {
          return false;
        } else {
          return "Invalid value";
        }
      }
    } else if (type === "ycoord") {
      if (value) {
        if (value > 28000 && value < 350000) {
          return false;
        } else {
          return "Invalid value";
        }
      }
    } else if (type === "lat") {
      if (value) {
        if (value > -90 && value < 90) {
          return false;
        } else {
          return "Invalid value";
        }
      }
    } else if (type === "lng") {
      if (value) {
        if (value > -180 && value < 180) {
          return false;
        } else {
          return "Invalid value";
        }
      }
    }
    return true;
  };
  onChangeCampaign = (event, label) => {
    var { campaign } = this.state;
    var parameter = campaign.find((c) => c.label === label);
    if (typeof event === "object") {
      parameter.value = event.target.value;
    } else {
      parameter.value = event;
    }
    parameter.error = false;
    this.setState({ campaign, validated: false });
  };
  onFileChange = (event, label, id) => {
    var { files } = this.state;
    var file = files.find((f) => f.id === id);
    var parameter = file.metadata.find((f) => f.label === label);
    parameter.value = event.target.value;
    parameter.error = false;
    this.setState({ files, validated: false });
  };
  createMetadata = () => {
    var { campaign, files } = this.state;
    var validated = true;
    campaign.map((c) => {
      c.error = this.validate(c.value, c.validate);
      if (c.error !== false) {
        validated = false;
      }
      return c;
    });
    files.map((f) =>
      f.metadata.map((m) => {
        m.error = this.validate(m.value, m.validate);
        if (m.error !== false) {
          validated = false;
        }
        return m;
      })
    );
    this.setState({ campaign, files, validated });
  };
  handleDrop = (e) => {
    e.preventDefault();
    var inputFiles = Array.from(e.dataTransfer.files);
    this.setFiles(inputFiles);
  };
  handleClick = () => {
    document.getElementById("fileInput").click();
  };
  selectFiles = (event) => {
    var inputFiles = Array.from(event.target.files);
    this.setFiles(inputFiles);
  };
  setFiles = (inputFiles) => {
    var { files, fileMetadata, extensions, campaign } = this.state;
    var coords = campaign.find(c => c.label === "Coordinate System")["value"]
    var count = 0;
    for (let inputFile of inputFiles) {
      let name = inputFile.name;
      let extension = name.substring(name.length - 4).toLowerCase();
      if (extensions.includes(extension)) {
        let metadata = JSON.parse(JSON.stringify(fileMetadata));
        metadata = metadata.filter(m => !("filter" in m) || m["filter"] === coords)
        files.push({ id: inputFile.name, metadata, download: false });
        count = count + 1;
      }
    }
    window.alert(
      `${count} files added, ${
        inputFiles.length - count
      } files removed due to incorrect extensions. Allowed extensions [.TOB, .rsk, .cnv].`
    );
    this.setState({ files, validated: false });
  };
  removeFile = (id) => {
    var { files } = this.state;
    files = files.filter((f) => f.id !== id);
    this.setState({ files });
  };
  downloadFile = (id) => {
    var { campaign, files } = this.state;
    var file = files.find((f) => f.id === id);

    var campaignOut = {};
    for (let p of campaign) {
      campaignOut[p.label] = p.value;
    }
    var fileOut = {};
    for (let p of file.metadata) {
      fileOut[p.label] = p.value;
    }
    var output = { filename: id, valid: true, campaign: campaignOut, profile: fileOut };
    const jsonString = JSON.stringify(output, null, 2);
    const blob = new Blob([jsonString], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", id.slice(0, -3) + "meta");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  render() {
    var { campaign, files, validated } = this.state;
    return (
      <div className="main">
        <div className="content">
          <div className="title">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            CTD Metadata Form
          </div>
          <div className="form">
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="container"
            >
              <div className="section">Information about the campain</div>
              {campaign.map((c) => (
                <Input {...c} onChange={this.onChangeCampaign} key={c.label} />
              ))}
              <div className="section">Profiles</div>
              <div
                className="drop-area"
                id="dropArea"
                onDrop={this.handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => e.preventDefault()}
                onDragLeave={(e) => e.preventDefault()}
                onClick={this.handleClick}
              >
                <p>Drag & Drop profiles here or click to select them</p>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  onChange={this.selectFiles}
                />
              </div>
              {files.map((f) => (
                <File
                  file={f}
                  key={f}
                  onChange={this.onFileChange}
                  removeFile={this.removeFile}
                />
              ))}
              <button className="create" onClick={this.createMetadata}>
                Create Metadata
              </button>
              {validated && (
                <React.Fragment>
                  <div className="section">Download metadata files</div>
                  <div className="section-details">
                    Please download all the metadata files, without changing the
                    default names and upload them with the profiles to the
                    google drive folder.
                  </div>
                  {files.map((f) => (
                    <div
                      className="download-file"
                      onClick={() => this.downloadFile(f.id)}
                    >
                      {f.id.slice(0, -3) + "meta"}
                      <div className="download-icon">Download</div>
                    </div>
                  ))}
                </React.Fragment>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
