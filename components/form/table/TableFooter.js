import { StyledTableFooter } from '.'
import TablePagination from './TablePagination'
import { useTranslation } from '../../../i18n'

export default function TableFooter({ count, page, setPage }) {
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }
    const { t } = useTranslation()
    return (
        <StyledTableFooter>
            <p style={{ color: '#000' }}>
                {(page - 1) * 5 + 1} – {page * 5 > count ? count : page * 5} из{' '}
                {count} {t('thinks')}
            </p>
            <TablePagination
                count={Math.ceil(count / 5) || 1}
                onChange={handleChangePage}
                page={page}
                siblingCount={1}
                boundaryCount={2}
            />
        </StyledTableFooter>
    )
}
