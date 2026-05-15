import {test,except} from '@playwright/test'
import *as XLSX from 'xlsx'

const workbook = XLSX.readFile('testdata.xlsx')
const sheetname = workbook.SheetNames[0]
const sheet = workbook.Sheets[sheetname]
const data = XLSX.utils.sheet_to_json(sheet)




