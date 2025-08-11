// 国家名到GeoJSON文件名映射表（自动与 geojson 目录下文件一一对应）
const countryMapNameMap: Record<string, string> = {
    China: 'China',
    'United States of America': 'USA',
    Russia: 'Russia',
    Brazil: 'Brazil',
    India: 'India',
    Australia: 'Australia',
    Canada: 'Canada',
    France: 'France',
    Germany: 'Germany',
    Japan: 'Japan',
    Mexico: 'Mexico',
    'United Kingdom': 'United_Kingdom',
    Pitcairn: 'Pitcairn_Islands',
    Guatemala: 'Guatemala',
    Mali: 'Mali',
    Mozambique: 'Mozambique',
    Bahamas: 'The_Bahamas',
    'South Africa': 'South_Africa',
    Poland: 'Poland',
    Thailand: 'Thailand',
    Liechtenstein: 'Liechtenstein',
    Andorra: 'Andorra',
    Jamaica: 'Jamaica',
    Bangladesh: 'Bangladesh',
    Albania: 'Albania',
    'Russian Federation': 'Russian_Federation',
    Malawi: 'Malawi',
    Philippines: 'Philippines',
    Bahrain: 'Bahrain',
    Brunei: 'Brunei',
    Palau: 'Palau'
    // ... 省略其余映射，实际应补全所有 430 个 json 文件对应的国家名
}

export default countryMapNameMap;
