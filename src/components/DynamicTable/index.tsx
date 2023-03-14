import React, { useState } from "react";
import { FieldType } from "../../types/FieldType";
import ConfirmModal from "../ConfirmModal";
import DeleteButton from "../DeleteButton";

interface DynamicTableInter {
  tableData: any[];
  fields: FieldType[];
  rowDelete: CallableFunction;
}

export const DynamicTable: React.FC<DynamicTableInter> = (data) => {
  const [show, setShow] = useState<boolean>(false);
  const [rowId, setRowId] = useState<string>({} as string);
  const [hoverIndex, setHoverIndex] = useState<number>(-1);

  const openModal = (id: string): void => {
    setShow(true);
    setRowId(id);
  };
  const { tableData, rowDelete, fields } = data;

  return (
    <>
      {show && (
        <ConfirmModal rowId={rowId} rowDelete={rowDelete} setShow={setShow} />
      )}
      <table data-testid="succeed-table">
        <thead>
          <tr>
            {fields.map((head: FieldType, index: number) => {
              return <th key={index}>{head.text}</th>;
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index: number) => {
            return (
              <tr
                key={index}
                data-rowid={row.id}
                onMouseOver={() => setHoverIndex(row.id)}
                onMouseLeave={() => setHoverIndex(-1)}
                style={row.id === hoverIndex ? { background: "#ccc" } : {background:'transparent'}}
              >
                {fields.map((field: FieldType, ind: number) => {
                  return (
                    <td key={ind}>
                      {row[field.value] ? row[field.value] : "-"}
                    </td>
                  );
                })}
                <td>
                  <DeleteButton
                    onClick={() => openModal(row.id)}
                    row_id={row.id}
                  >
                    Delete
                  </DeleteButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
