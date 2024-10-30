import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbarQuickFilter } from "@mui/x-data-grid";
import moment from "moment";
import { useState } from "react";
import { Outlet } from "react-router-dom";

interface IListagemPonto {
    id: number;
    data: string;
    jornada: string;
    chegada: string;
    inicioIntervalo: string;
    fimIntervalo: string;
    saida: string;
    atrasos: string;
    horaExtra: string;
    turno: string;
}
export function ListagemDePonto() {
    const [listagemPonto] = useState<IListagemPonto[]>([
        {
            id: 1,
            data: moment().format("DD/MM/YYYY"),
            jornada: "08:00 - 18:00",
            chegada: moment("2024-10-28T08:00Z").format("HH:mm"),
            inicioIntervalo: moment("2024-10-28T08:00Z").format("HH:mm"),
            fimIntervalo: moment("2024-10-28T08:00Z").format("HH:mm"),
            saida: moment("2024-10-28T08:00Z").format("HH:mm"),
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
    ]);
    const columns: GridColDef[] = [
        {
            field: "data",
            headerName: "Data",
        },
        {
            field: "jornada",
            headerName: "Jornada",
        },
        {
            field: "chegada",
            headerName: "Chegada",
        },
        {
            field: "inicioIntervalo",
            headerName: "Inicio Intervalo",
        },
        {
            field: "fimIntervalo",
            headerName: "Fim intervalo",
        },
        {
            field: "saida",
            headerName: "Saída",
        },
        {
            field: "atrasos",
            headerName: "Atrasos",
        },
        {
            field: "horaExtra",
            headerName: "Hora extras",
        },
        {
            field: "turno",
            headerName: "Turno",
        },
    ];

    const QuickSearchToolbar = () => {
        return (
            <Box sx={{ p: 2, display: "flex", justifyContent: "end" }}>
                <GridToolbarQuickFilter placeholder='Digite para pesquisar' />
            </Box>
        );
    };

    return (
        <>
            Registro de ponto
            <DataGrid
                sx={{ marginTop: 2 }}
                disableRowSelectionOnClick
                disableColumnMenu
                autoHeight
                rows={listagemPonto}
                columns={columns}
                localeText={{
                    noRowsLabel: "Nenhum registro",
                    noResultsOverlayLabel: "Nenhum registro encontrado",
                    MuiTablePagination: { labelRowsPerPage: "Linhas por página" },
                }}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{
                    toolbar: QuickSearchToolbar,
                }}
                slotProps={{
                    toolbar: {
                        quickFilterProps: { debounceMs: 300 },
                    },
                }}
                pageSizeOptions={[10, 20, 30]}
            />
            <Outlet />
        </>
    );
}
const RegistroDePonto: React.FC = () => {
    return (
        <Box
            sx={{
                width: "139px",
                height: "24px",
                position: "absolute",
                top: "20px",
                left: "104px",
                gap: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            Registro de Ponto
        </Box>
    );
};

export default RegistroDePonto;
