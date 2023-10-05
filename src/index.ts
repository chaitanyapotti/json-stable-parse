export default function recursiveJSONParse(val: unknown): unknown {
  try {
    const json = typeof val === "string" ? JSON.parse(val) : val;
    if (typeof json === "number" || typeof json === "bigint" || typeof json === "boolean") return val;
    if (Array.isArray(json)) {
      json.forEach((x, i) => {
        if (x === "undefined") json[i] = undefined;
        else if (Array.isArray(json[i])) json[i] = recursiveJSONParse(x);
        else if (x === null || x === "null" || x === "nil") json[i] = null;
        else if (typeof x === "string" || typeof x === "object") json[i] = recursiveJSONParse(x);
      });
    } else if (typeof json === "object")
      Object.keys(json).forEach((x) => {
        if (json[x] === "undefined") delete json[x];
        else if (Array.isArray(json[x])) json[x] = recursiveJSONParse(json[x]);
        else if (json[x] === null || json[x] === "null" || json[x] === "nil") json[x] = null;
        else if (typeof json[x] === "string" || typeof json[x] === "object") json[x] = recursiveJSONParse(json[x]);
      });
    return json;
  } catch (error) {
    return val;
  }
}
